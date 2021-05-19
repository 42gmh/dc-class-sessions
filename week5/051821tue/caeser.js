const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encode(theText, offset)
{
    let resultText = "";
    for(let i = 0; i < theText.length; i++)
    {
        let index = alphabet.search(theText[i].toLowerCase());

        let encodedIndex = index + offset;

        let encodedChar = (encodedIndex >= alphabet.length) ? alphabet[encodedIndex - alphabet.length] : alphabet[encodedIndex];

        resultText += (theText[i] == theText[i].toLowerCase()) ? encodedChar : encodedChar.toUpperCase();
    }

    return resultText;
}

function decode(theText, offset)
{
    let resultText = "";
    for(let i = 0; i < theText.length; i++)
    {
        let index = alphabet.search(theText[i].toLowerCase());

        let encodedIndex = index - offset;

        let encodedChar = (encodedIndex < 0) ? alphabet[alphabet.length + encodedIndex] : alphabet[encodedIndex];

        resultText += (theText[i] == theText[i].toLowerCase()) ? encodedChar : encodedChar.toUpperCase();
    }

    return resultText;
}

const source = process.argv[2];
const offset = Number.parseInt(process.argv[3]);

console.log("Source:", source);
console.log("Offset:", offset);

const encoded = encode(source, offset);
console.log("Encoded:", encoded)

console.log("Decoded:", decode(encoded, offset));