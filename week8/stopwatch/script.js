const stopWatch = () => {
    let randoSeconds = Math.floor(Math.random() * 10) + 1;
    const millis = randoSeconds * 1000;

    let theStartTime = new Date();

    return new Promise(resolve => 
        setTimeout(() => {
            resolve({
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

stopWatch().then(value => {
    document.getElementById("running").style.display = "none";
    document.getElementById("start").textContent = "Started at: " + value.startTime;
    document.getElementById("stop").textContent = "Stopped at: " + value.stopTime;
    document.getElementById("duration").textContent = "Ran for: " + value.duration + " seconds.";
});
