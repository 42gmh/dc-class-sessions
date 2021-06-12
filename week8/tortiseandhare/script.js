const animal = (animalType) => {
    console.log("determining rando seconds for:", animalType);
    let randoSeconds = Math.floor(Math.random() * 10) + 1;
    const millis = randoSeconds * 1000;

    let theStartTime = new Date();

    return new Promise(resolve => {
        console.log("creating promise for:", animalType);
        setTimeout(() => {
            console.log("triggering timeout for:", animalType);
            resolve({
                animalType: animalType,
                startTime: theStartTime,
                duration: randoSeconds,
                stopTime: new Date()});
        }, millis);
    })
};

Promise.all([animal("Tortise"), animal("Hare")]).then((values) => {

    console.log("All promises have resolved.");

    let tortiseResults;
    let hareResults;

    if("Tortise" == values[0].animalType) {
        tortiseResults = values[0];
        hareResults = values[1];    
    }
    else {
        tortiseResults= values[1];
        hareResults = values[0];    
    }

    printStopTime(tortiseResults, hareResults);

    if (tortiseResults.stopTime < hareResults.stopTime) {

        printWinner(tortiseResults);
    }
    else if (hareResults.stopTime < tortiseResults.stopTime) {

        printWinner(hareResults);
    }
    else {
        printWinner(null);
    }

    document.getElementById("running").style.display = "none";

});

function printWinner(winner) {

    let winnerText = winner ? "And the winner is:" + winner.animalType : "It's a tie.";

    document.getElementById("winner").textContent = winnerText;
}

function printStopTime(tortiseResults, hareResults)  {

    document.getElementById("tortise-time").textContent = "Tortise end time:" + tortiseResults.stopTime;
    document.getElementById("hare-time").textContent = "Hare end time:" + hareResults.stopTime;
}