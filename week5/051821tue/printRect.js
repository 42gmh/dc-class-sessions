function printRect(height, width)
{
    console.log(`Rect ${height} high and ${width} wide.`);
    console.log("-".repeat(width));
    for(let i = 0; i < height; i++)
    {
        console.log("|" + " ".repeat(width - 2) + "|");
    }
    console.log("-".repeat(width));
}

const h = Number.parseInt(process.argv[2]);
const w = Number.parseInt(process.argv[3]);

printRect(h, w);
