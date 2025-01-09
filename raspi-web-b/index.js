// Imports
import express from 'express';
import { getFileData } from './paths.js';
import path from 'path';

// Configuration
const PORT = 80;
const app = express();
const __dirname = path.resolve('');

// Setup
// app.use(express.json());
app.use(express.static(path.join(__dirname, '../raspi-web-f')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../raspi-web-f/index.html'));
});

app.get('/video', (req, res) => {
    res.sendFile(path.join(__dirname, '../raspi-web-f/video.html'));
});

app.get('/video/files', (req, res) => {
    try {
        const fileData = getFileData('./video');
        res.send(fileData);
    } catch (e) {
        console.error(e);
    }
});

app.get('/video/:collection/:video', (req, res) => {
    const { collection, video } = req.params;
    res.sendFile(path.join(__dirname, './video', collection, video));
});

app.get('/literature', (req, res) => {
    res.sendFile(path.join(__dirname, '../raspi-web-f/literature.html'));
});

app.get('/literature/files', (req, res) => {
    try {
        const fileData = getFileData('./literature');
        res.send(fileData);
    } catch (e) {
        console.error(e);
    }
});

app.get('/literature/:collection/:book', (req, res) => {
    const { collection, book } = req.params;
    res.sendFile(path.join(__dirname, './literature', collection, book));
});

app.get('/audio', (req, res) => {
    res.sendFile(path.join(__dirname, '../raspi-web-f/audio.html'));
});

app.get('/audio/files', (req, res) => {
    try {
        const fileData = getFileData('./audio');
        res.send(fileData);
    } catch (e) {
        console.error(e);
    }
});

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