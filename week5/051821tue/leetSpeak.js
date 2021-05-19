function leet(lameText)
{
    let leetText = "";
    for(let i = 0; i < lameText.length; i++)
    {
        switch(lameText[i])
        {
            case "a":
            case "A":
                leetText += "4";
                break;
            case "e":
            case "E":
                leetText += "3";
                break;
            case "g":
            case "G":
                leetText += "6";
                break;
            case "o":
            case "O":
                leetText += "0";
                break;            
            case "s":
            case "S":
                leetText += "5";
                break;
            case "t":
            case "T":
                leetText += "7";
                break;
            default:
                leetText += lameText[i];
        }                                                      
    }

    return leetText;
}

console.log(leet(process.argv[2]));
