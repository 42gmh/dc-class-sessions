const http = require('http');
const express = require('express');
const app = express();

const swchars = [
    {
        name:"Luke",
        desc:"Soooooo whiny."
    },
    {
        name:"Ashoka",
        desc:"The best!"
    },
    {
        name:"Han",
        desc:"A rascal and a scoundrel."
    }
]

const server = http.createServer(app);

app.get('/', (req, res) => {

    let myHtml = "<html><body><ul>";
    swchars.forEach(aCharacter => {
        myHtml += `<li><a href="/${aCharacter.name}">${aCharacter.name}</li>`    
    });
    myHtml += "</ul></body></html>";
    res.send(myHtml);
});

app.get('/:character', (req, res) => {
    let myHtml = "<html><body><ul>";

    let foundCharacter = swchars.find(aCharacter => aCharacter.name === req.params.character);
    if(foundCharacter) {
        myHtml +=`<p>${foundCharacter.name} is ${foundCharacter.desc.toLowerCase()}</p>`
    }
    else{
        myHtml += "<p>There is a disturbance in the force.</p>"
    }

    myHtml += `<a href="/">Back to Tatooine.</a>`;
    myHtml += "</ul></body></html>";
    res.send(myHtml);
});

const hostname = '127.0.0.1';
const port = 3001;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
