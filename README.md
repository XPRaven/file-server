### What is this?
This is a basic Node.js server for hosting different types of files coupled with a simple frontend for access.

The project is split into frontend and backend with respective folders `web-f` and `web-b`.

### Requirements
- Node.js
- Express (can be installed using npm)

A download guide can be found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### How to use
#### Adding files
There are multiple directories (`web-b/video`, `web-b/literature`, `web-b/audio`) that can hold files.
Files are displayed directly in the browser as raw files, meaning anything that a browser can display will work.

Files require the pattern `type/collection/[number name]`
with type being the type directory (i.e. video, audio),
collection being the series, group, album, etc. a book, volume, episode, track, etc.,
number being the position of the element in the series,
name being the actual name of the file.

For example: `videos/Computerphile - Tom Scott on Computerphile/07 The Problem with Time & Timezones - Computerphile`

Other than the filepath format, adding files is a drag-n-drop process.

<sub>Element sorting by number may be OS dependent. Try adding leading zeros to fix issues.</sub>

#### Starting the server
**The server is set to start on port 80 which should require elevated privileges.**
This can be changed in `web-b/index.js` as the `PORT` variable.
Anything above port 1023 should work, but port 8008 and 8080 are recommended options.

The server can be started using `node index.js` or `npm start` in the `web-b` directory.