import fs from 'fs';
import path from 'path';

/**
 * Recursively fetch all file paths from a given directory.
 * @param {string} dir - The directory to start scanning.
 * @returns {string[]} - Array of file paths.
 */
function getFilePaths(dir) {
    let filePaths = [];

    // Read the contents of the directory
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // Recursively fetch files from subdirectory
            filePaths = filePaths.concat(getFilePaths(fullPath));
        } else if (entry.isFile()) {
            // Add file path to the list
            filePaths.push(fullPath);
        }
    }
    return filePaths;
}

/**
 * Split the episode number from the episode name and return both.
 * @param {string} input - The full file name.
 * @returns {{number: *, rest: string}} - Episode number, and episode name including file extension.
 */
function splitNoFromName(input) {
    const [number, ...rest] = input.split(' ');
    return {
        number,
        rest: rest.join(' ').trim()
    };
}

/**
 * Recursively fetches all file paths, splits them into series name, episode number, episode name, and full file path, and returns them.
 * @param directoryToScan - The directory to recursively search through.
 * @returns {*[]} - Array of all formatted fileDatas
 */
export function getFileData(directoryToScan) {
    try {
        let allFiles = [];
        const files = getFilePaths(directoryToScan);
        for (const file of files) {
            // Split path into root dir, series dir, filename
            const [, series, filename] = file.split(path.sep);

            // Separate episode number from episode name and extension
            const { number: no, rest: episodeName} = splitNoFromName(filename);

            // Get filename without extension
            const extension = path.extname(episodeName);
            const episode = path.basename(episodeName, extension);

            // Assemble data packet
            const fileData = {
                series: series,
                no: no,
                episode: episode,
                path: file
            }
            allFiles.push(fileData);
        }
        return allFiles;
    } catch (err) {
        console.error('Error reading directory:', err.message);
    }
}