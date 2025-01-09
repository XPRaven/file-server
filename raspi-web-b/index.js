// Imports
import express from 'express';
import { getFileData } from './paths.js';
import path from 'path';

// Configuration
const PORT = 80;
const app = express();
const __dirname = path.resolve('');

// Setup
// Setting to fetch static files (CSS) from the frontend directory
app.use(express.static(path.join(__dirname, '../raspi-web-f')));

// Routes
// Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../raspi-web-f/index.html'));
});

// Video page
app.get('/video', (req, res) => {
    res.sendFile(path.join(__dirname, '../raspi-web-f/video.html'));
});

// Video data API
app.get('/video/files', (req, res) => {
    try {
        const fileData = getFileData('./video');
        res.send(fileData);
    } catch (e) {
        console.error(e);
    }
});

// Video file
app.get('/video/:collection/:video', (req, res) => {
    const { collection, video } = req.params;
    res.sendFile(path.join(__dirname, './video', collection, video));
});

// Literature page
app.get('/literature', (req, res) => {
    res.sendFile(path.join(__dirname, '../raspi-web-f/literature.html'));
});

// Literature data API
app.get('/literature/files', (req, res) => {
    try {
        const fileData = getFileData('./literature');
        res.send(fileData);
    } catch (e) {
        console.error(e);
    }
});

// Literature file
app.get('/literature/:collection/:book', (req, res) => {
    const { collection, book } = req.params;
    res.sendFile(path.join(__dirname, './literature', collection, book));
});

// Audio page
app.get('/audio', (req, res) => {
    res.sendFile(path.join(__dirname, '../raspi-web-f/audio.html'));
});

// Audio data API
app.get('/audio/files', (req, res) => {
    try {
        const fileData = getFileData('./audio');
        res.send(fileData);
    } catch (e) {
        console.error(e);
    }
});

// Audio file
app.get('/audio/:collection/:audio', (req, res) => {
    const { collection, audio } = req.params;
    res.sendFile(path.join(__dirname, './audio', collection, audio));
});

// Test API
app.get('/test', (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
});

// Server start
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});