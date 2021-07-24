const pgp = require("pg-promise")();
const db = pgp("postgres://@localhost:5432/072221tododb");

const http = require('http');
const express = require('express');
const app = express();
app.use(express.static('public'));
const server = http.createServer(app);

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const morgan = require('morgan');
const logger = morgan('dev');
app.use(logger);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

// GET	/tasks	Reads all of the tasks
app.get('/', (req, res) => {
    db.any("SELECT * from TASKS where is_deleted = 'false'").then((tasks) => {
        taskList = tasks;
        console.log(taskList);

        res.render('index', {
            locals: {
                tasks: taskList
            }
        });
    });
});

// POST	/tasks	Creates a new task
app.post('/addtask', (req, res) => {
    console.log(req.body);

    db.none("insert into tasks (title) values ($1);", [req.body.newtask]);

    res.redirect("/");
});

// PATCH	/tasks/:id/is_completed	Updates if the task is completed
app.patch('/tasks/:id/completed', (req, res) => {
    console.log(req.params.id);

    db.none("update tasks set is_completed = 'true' where id = ($1);", [req.params.id]);

    res.sendStatus(200);
});

app.patch('/tasks/:id/undo', (req, res) => {
    console.log(req.params.id);

    db.none("update tasks set is_completed = 'false' where id = ($1);", [req.params.id]);

    res.sendStatus(200);
});

// DELETE	/tasks/:id	Deletes a task
app.delete('/tasks/:id', (req, res) => {
    console.log(req.params.id);

    db.none("update tasks set is_deleted = 'true' where id = ($1);", [req.params.id]);

    res.sendStatus(200);
});

// PATCH	/tasks/:id/title	Updates the task's title


const hostname = '127.0.0.1';
const port = 3003;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});