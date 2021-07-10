const http = require('http');

const db = require('./db');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

// console.log(app);
console.log(db);

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/friend', (req, res) => {
    let myHtml = '<ul>\n';
    db.forEach(element => {
        myHtml+=`<li><a href="${req.path}/${element.handle}"/>${element.name}</a></li>\n`;
    });

    myHtml += '</ul>\n';

    res.send(myHtml);
});

app.get('/friend/:handle', (req, res) => {

    const myFriend = db.find(element => element.handle === req.params.handle);

    let myHtml = `<h1>Handle: ${req.params.handle}</h1>`;
    if(myFriend) {
        myHtml += `<h2>Name: ${myFriend.name}</h2>`;
        myHtml += `<h3>Skill: ${myFriend.skill}</h3>`;
    }
    else {
        myHtml += `<p>You've not a made a friend with handle:${req.params.handle}</p>`;
    }

    myHtml += `<a href="/friend">Start Over</a>`;

    res.send(myHtml);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
