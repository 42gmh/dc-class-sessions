function printSquare(area)
{
    for(let i = 0; i < area; i++)
    {
        console.log("*".repeat(area));
    }
}

const a = Number.parseInt(process.argv[2]);
printSquare(a);
