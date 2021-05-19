function tipAmount(billAmt, levelOfService)
{
    let tipPct = .20;
    switch(levelOfService)
    {
        case "bad":
            tipPct = .10;
            break;
        case "fair":
            tipPct = .15;
            break;
        default:
            break;
    }

    return Math.round((billAmt * tipPct) * 100) / 100
}

function totalAmout(billAmt, levelOfService)
{
    return Number.parseInt(billAmt) + tipAmount(billAmt, levelOfService);
}

console.log(`Tip Amount: ${tipAmount(process.argv[2], process.argv[3])}`);
console.log(`Total Amount: ${totalAmout(process.argv[2], process.argv[3])}`);
