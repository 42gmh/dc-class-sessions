'use strict'

require('dotenv').config();

validateEnv();

console.log(process.env.JWT_SECRET);

const express = require('express');
const cors = require("cors");


const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

const expressServer = express();
expressServer.use(express.urlencoded({ extended: true }));
expressServer.use(express.json());
expressServer.use(cors({ origin: "http://localhost:3031" }));

// simple route
expressServer.get("/", (req, res) => {
    res.json({ message: "Hello world!" });
});

require('./app/routes/auth.routes')(expressServer);
require('./app/routes/user.routes')(expressServer);

  
// set port, listen for requests
const PORT = process.env.PORT || 3030;
expressServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }

  function validateEnv()
  {
    const requiredEnvVars = ['DB_PASSWORD', 'DB_USER'];
    const nonEmptyEnvVars = ['JWT_SECRET', 'DB_NAME'];


    // let missingEnvVars = [];

    // if(!process.env.JWT_SECRET) {
    //   missingEnvVars.push('JWT_SECRET');
    // }

    // if(!process.env.hasOwnProperty('DB_USER')) {
    //   missingEnvVars.push('DB_USER');
    // }

    // if(!process.env.DB_PASSWORD) {
    //   missingEnvVars.push('DB_PASSWORD');
    // }

    // if(!process.env.DB_NAME) {
    //   missingEnvVars.push('DB_NAME');
    // }

    // if(missingEnvVars.length) {
    //   console.log("Set missing env vars:", missingEnvVars);
    //   throw("Missing Env Vars:" + missingEnvVars);
    // }
  }