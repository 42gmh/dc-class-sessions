// To run this: node <x> <y> where <x> and <y> are numbers
// For Example: node May4_solution2.js 5 45

// Step 1: Create an anonymous function that returns the sum of new numbers
const mySumFn = (x, y) => x + y;

// Step 2: Create a function that accepts the annonymous function that
// we created above, and returns whether the sum that it returns
// is even or odd.
function isFnResultEvenOrOdd(x, y, myCallback)
{
    // console.log("My Callback is:", myCallback);
    let callbackResult = myCallback(x,y);
    return {
        fnRes: callbackResult,
        evenOrOdd: (callbackResult % 2 ? "odd" : "even")
    };
}

// Result: Your console output should look like this:
// "[Number] is [even // odd]"
let x = Number.parseInt(process.argv[2]);
let y = Number.parseInt(process.argv[3]);

let myResultObject = isFnResultEvenOrOdd(x,y, mySumFn);
console.log(`[${myResultObject.fnRes}] is [${myResultObject.evenOrOdd}]`);