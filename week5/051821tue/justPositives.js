const inputArray = process.argv.slice(2).map(x => Number.parseInt(x));

console.log(inputArray);

console.log(inputArray.filter(x => x > 0));