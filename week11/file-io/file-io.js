'use strict'
const fs = require('fs');

const readline = 
    require('readline').createInterface({
        input: process.stdin,
        output: process.stdout });

readline.question('Input File? ', ifn => {
    readline.question('Output File? ', ofn => {

        capsIt(ifn, ofn);

        readline.close();
    })
});

function capsIt(ifn, ofn){

    fs.readFile(ifn, 'utf8', (err, data) => {
        if(err) throw err;

        fs.writeFile(ofn, data.toUpperCase(), (err) => {

            if (err) {
                throw err;
            };
    });
});
}
