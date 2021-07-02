const http = require('http');

const hostname = '127.0.0.1';
const port = 5050;

const cowsay = require('cowsay');


console.log();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const myString = cowsay.say(
    {
      text: decodeURI(req.url)
    })
  res.end(myString);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
