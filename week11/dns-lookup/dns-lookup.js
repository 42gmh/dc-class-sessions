const dns = require('dns');
const readline = 
    require('readline').createInterface({
        input: process.stdin,
        output: process.stdout });

function logIt(err, address, family, theUrl)
{
    const output = err ? `err: ${err}` : `address: ${address} family: IPv${family}`;
    console.log(`${theUrl} ==> ` + output);
}

readline.question('URL? ', theUrl => {

    dns.lookup(theUrl, 0, 
        (err, address, family) => logIt(err, address, family, theUrl));
    readline.close();
});