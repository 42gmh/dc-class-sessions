function madlib(name, subject)
{
    return `${name}'s favorite subject in school is ${subject}`;
}

console.log(madlib(process.argv[2], process.argv[3]));