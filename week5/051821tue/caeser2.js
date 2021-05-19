const alphabet = "abcdefghijklmnopqrstuvwxyz";

function swizzle(theText, offset, swizzleFn)
{
    let resultText = "";
    for(let i = 0; i < theText.length; i++)
    {
        let index = alphabet.search(theText[i].toLowerCase());

        let swizzledChar = swizzleFn(index, offset);

        resultText += 
            (theText[i] == theText[i].toLowerCase()) ? swizzledChar : swizzledChar.toUpperCase();
    }

    return resultText;
}

let decoder = (index, offset) => {
    let decodedIndex = index - offset;

    let decodedChar = (decodedIndex < 0) ? 
            alphabet[alphabet.length + decodedIndex] : alphabet[decodedIndex];

    return decodedChar;
}

let encoder = (index, offset) => {
    let encodedIndex = index + offset;

    let encodedChar = (encodedIndex >= alphabet.length) ? 
            alphabet[encodedIndex - alphabet.length] : alphabet[encodedIndex];

    return encodedChar;
}

let encode = (source, offset) => swizzle(source, offset, encoder);
let decode = (source, offset) => swizzle(source, offset, decoder);

const source = process.argv[2];
const offset = Number.parseInt(process.argv[3]);

console.log("Source:", source);
console.log("Offset:", offset);
console.log("*".repeat(25));

const encoded = encode(source, offset);
console.log("Encoded:", encoded)

console.log("Decoded:", decode(encoded, offset));