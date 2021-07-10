const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/cats', (req, res) => {
    res.send('Meow!');
});
app.get('/dogs', (req, res) => {
    res.send('Woof!');
});
app.get('/cats_and_dogs', (req, res) => {
    res.send('Meow! Woof!');
});
const hostname = '127.0.0.1';
const port = 3002;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});