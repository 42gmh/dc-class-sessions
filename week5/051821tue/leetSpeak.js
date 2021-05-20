function leet(lameText) {
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


function leet2(lameText) {
    const leetMap = new Map();
    leetMap.set("a", "4");
    leetMap.set("e", "3");
    leetMap.set("g", "6");
    leetMap.set("o", "0");
    leetMap.set("s", "5");
    leetMap.set("t", "7");

    let toLeet = aLetter => leetMap.has(aLetter.toLowerCase()) ? leetMap.get(aLetter.toLowerCase()) : aLetter;
    let stringCat = (accum, curr) => accum += curr;

    return Array.prototype.map.call(lameText, toLeet).reduce(stringCat);
}

console.log(leet(process.argv[2]));
console.log(leet2(process.argv[2]));
