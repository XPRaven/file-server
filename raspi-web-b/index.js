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

app.get('/4d', (req, res) => {
    res.sendFile(path.join(__dirname, '../raspi-web-f/4d.html'));
});

app.get('/4d/files', (req, res) => {
    try {
        const fileData = getFileData('./4d');
        res.send(fileData);
    } catch (e) {
        console.error(e);
    }
});

app.get('/4d/:collection/:video', (req, res) => {
    const { collection, video } = req.params;
    res.sendFile(path.join(__dirname, './4d', collection, video));
});

app.get('/3d', (req, res) => {
    res.sendFile(path.join(__dirname, '../raspi-web-f/3d.html'));
});

app.get('/3d/files', (req, res) => {
    try {
        const fileData = getFileData('./3d');
        res.send(fileData);
    } catch (e) {
        console.error(e);
    }
});

app.get('/3d/:collection/:book', (req, res) => {
    const { collection, book } = req.params;
    res.sendFile(path.join(__dirname, './3d', collection, book));
});

app.get('/2d', (req, res) => {
    res.sendFile(path.join(__dirname, '../raspi-web-f/2d.html'));
});

app.get('/2d/files', (req, res) => {
    try {
        const fileData = getFileData('./2d');
        res.send(fileData);
    } catch (e) {
        console.error(e);
    }
});

app.get('/2d/:collection/:audio', (req, res) => {
    const { collection, audio } = req.params;
    res.sendFile(path.join(__dirname, './2d', collection, audio));
});

// Test API
app.get('/test', (req, res) => {
    console.log('Hello World');
});

// Server start
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});