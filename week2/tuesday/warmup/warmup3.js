"use strict";

let randNum = 0;
do {
    randNum = Math.floor(Math.random() * 10) + 1;

    let outputStr = `${randNum} is: `;
    
    outputStr = outputStr + (randNum % 2 ? "odd" : "even");

    console.log(outputStr);

    if(7 == randNum)
    {
        console.log("Lucky Seven!!!!");
    }

} while (7 != randNum)