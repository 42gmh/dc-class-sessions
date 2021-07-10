const http = require('http');

const db = require('./db');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

// console.log(app);
console.log(db);

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.render('home',{
        partials: {
        head: '/partials/head'
        }
    });
});

app.get('/friends-list', (req, res) => {
    res.render('friends-list', {
        locals: {
            friends: db,
            myPath: req.path
        },
        partials: {
            head: '/partials/head',
            back: '/partials/backtowelcome'
        }
    });
});

app.get('/friends-list/:handle', (req, res) => {

    const myFriend = db.find(element => element.handle === req.params.handle);

    if(myFriend) {
        res.render('friend', {
            locals: {
                aFriend: myFriend
            },
            partials: {
                head: '/partials/head',
                back: '/partials/backtowelcome'
            }
        })
    }
    else {
            res.status(404).send(`no friend with handle ${handle}`)
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
