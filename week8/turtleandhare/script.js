const animal = (animalType) => {
    let randoSeconds = Math.floor(Math.random() * 10) + 1;
    const millis = randoSeconds * 1000;

    let theStartTime = new Date();

    return new Promise(resolve => 
        setTimeout(() => {
            resolve({
                animalType: animalType,
                startTime: theStartTime,
                duration: randoSeconds,
                stopTime: new Date()});
        }, millis));
};

function timeOutFn(theStartTime, seconds, aResolveFn) {

    let returnValue = {
        startTime: theStartTime,
        duration: seconds,
        stopTime: new Date()
    }

    console.log(new Date());

    aResolveFn(returnValue);
}

Promise.all([animal("Tortise"), animal("Hare")]).then((values) => {

    printStopTime(values);
    if(values[0].stopTime > values[1].stopTime)
    {
        document.getElementById("winner").textContent = "And the winner is:" + values[1].animalType;
    }
    else if(values[0].stopTime < values[1].stopTime)
    {
        document.getElementById("winner").textContent = "And the winner is:" + values[0].animalType;
    }
    else{
        document.getElementById("winner").textContent = "It's a tie!";
    }
});

function printStopTime(values) {
    if(values[0].animalType = "Hare") {
        document.getElementById("tortise-time").textContent = "Tortise end time:" + values[1].stopTime;
        document.getElementById("hare-time").textContent = "Hare end time:" + values[0].stopTime;
    }
    else {
        document.getElementById("tortise-time").textContent = "Tortise end time:" + values[0].stopTime;
        document.getElementById("hare-time").textContent = "Hare end time:" + values[1].stopTime;
    }
}