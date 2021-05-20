let vowels = new Set();
vowels.add('a');
vowels.add('e');
vowels.add('i');
vowels.add('o');
vowels.add('u');

function longVowel(theText)
{
    let resultText = "";
    for(let i = 0; i < theText.length; i++)
    {
        if(vowels.has(theText[i].toLowerCase()))
        {
            resultText += theText[i].repeat(5);
        }
        else{
            resultText += theText[i];
        }                                       
    }

    return resultText;
}

function longVowelMap(theText)
{
    let expandVowels = aLetter => vowels.has(aLetter.toLowerCase()) ? aLetter.repeat(5) : aLetter;
    let concatStrs = (accum, curr) => accum += curr;

    return Array.prototype.map.call(theText, expandVowels).reduce(concatStrs);
}

console.log(longVowel(process.argv[2]));
console.log(longVowelMap(process.argv[2]));
