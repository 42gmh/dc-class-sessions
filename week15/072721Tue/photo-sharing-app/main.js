'use strict'

const http = require('http');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const server = http.createServer(app);

const Sequelize = require('sequelize');
const { User } = require('./models');

console.log(User);

app.get('/', (req, res) => {
    console.log("get /");
    res.sendStatus(200);
});

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.post('/users', async (req, res) => {

    console.log(req.body);
    // req.body contains an Object with firstName, lastName, email
    const { firstName, lastName, email } = req.body;
    const newUser = await User.create({
        firstName,
        lastName,
        email
    });
    
    // // Send back the new user's ID in the response:
    res.json({
        id: newUser.id
    });
});

app.get('/users/by-last-name', async (req, res) => {
    const users = await User.findAll({
        attributes: ['lastName']
    });
    res.json(users);
});

app.get('/users/:id', async (req, res) => {
    try{
        const oneUser = await User.findByPk(req.params.id);
        if(!oneUser) {
            throw("hunh?");
        }
        res.json(oneUser);
    } catch (e) {
        console.log(e);
        res.status(404).json({
            message: 'User not found'
        });
    }
});

app.post('/users/search', async (req, res) => {
    const users = await User.findAll({
        where: {
            [Sequelize.Op.or]: 
                { 
                    firstName: req.body.term,
                    lastName: req.body.term
                }
            
        }
    });
    res.json(users);
});

app.post('/users/:id', async (req, res) => {
    const { id } = req.params;
    
    // Assuming that `req.body` is limited to
    // the keys firstName, lastName, and email
    const updatedUser = await User.update(req.body, {
      where: {
        id
      }
    });
    
    res.json(updatedUser);
});

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.destroy({
        where: {
            id
        }
    });
    res.json(deletedUser);
});

const hostname = '127.0.0.1';
const port = 3005;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});