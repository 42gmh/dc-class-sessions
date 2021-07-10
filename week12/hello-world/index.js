const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const hostname = '127.0.0.1';
const port = 3001;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
