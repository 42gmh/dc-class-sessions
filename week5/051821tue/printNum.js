function printNumFor(first, second)
{
    console.log(`Number from ${first} to ${second} with FOR`);
    let stepFn = (x) => ++x;
    let terminateTest = (x) => x <= second;

    if(second < first)
    {
        stepFn = (x) => --x;
        terminateTest = (x) => x >= second;
    }

    for(i = first; terminateTest(i); i = stepFn(i))
    {
        console.log(`\t${i}`);
    }
}

function printNumWhile(first, second)
{
    console.log(`Number from ${first} to ${second} with WHILE`);
    let stepFn = (x) => ++x;
    let terminateTest = (x) => x <= second;
    if(second < first)
    {
        stepFn = (x) => --x;
        terminateTest = (x) => x >= second;
    
    }
    let counter = first;

    while(terminateTest(counter))
    {
        console.log(`\t${counter}`);
        counter = stepFn(counter);
    }
}

const a = Number.parseInt(process.argv[2]);
const b = Number.parseInt(process.argv[3]) 
printNumFor(a, b);
printNumWhile(a, b);