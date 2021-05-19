function longVowel(theText)
{
    let vowels = new Set();
    vowels.add('a');
    vowels.add('e');
    vowels.add('i');
    vowels.add('o');
    vowels.add('u');

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

console.log(longVowel(process.argv[2]));
