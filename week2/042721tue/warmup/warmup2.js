"use strict";

for (let i = 99; i > 0; i--) {

    console.log(`${i} bottles of beer on the wall. ${i} bottles of beer.`);

    if(i) {

        console.log(`Take one down and pass it around. ${i-1} bottles of beer on wall.`);
    } 
};