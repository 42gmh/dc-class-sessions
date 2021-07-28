'use strict'

const myPgPromiseFactory = require("pg-promise");
console.log(myPgPromiseFactory);

const myPgPromise = myPgPromiseFactory();
const myDb = myPgPromise("postgres://@localhost:5432/072221tododb");

let dbReturn = myDb.any("SELECT * from TASKS where is_deleted = 'false'").then((tasks) =>  {
    console.log("================ tasks ================");
    console.log(tasks);
});

console.log("================ dbReturn ================");
console.log(dbReturn);