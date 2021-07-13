const http = require('http');

const marioMap = require('./mariomap');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

console.log(marioMap);

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.render('draw-mario',{
        locals: {
            marioMap: marioMap
        },
        partials: {
            myBanner : "/partials/et-banner"
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


// marioMap.reduce((rows, currRow) => 
// rows + '<div class="row">' + 
//     currRow.reduce((cells, currCell) => cells + '<div class="col-auto my-contents" style="background-color:' + currCell + ';"></div>', '')
// + '</div>', '')
