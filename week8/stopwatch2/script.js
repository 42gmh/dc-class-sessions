console.log("ENTER - Script");
const myBtn = document.getElementById("my-btn");

console.log("\tScript - About to Add Event Listener");
myBtn.addEventListener("click", (event) => {
    console.log("ENTER - my event listener");

    document.getElementById("start").textContent = "";
    document.getElementById("stop").textContent = "";
    document.getElementById("duration").textContent = "";

    myBtn.textContent = "Running...";
    myBtn.disabled = true;
    stopWatch().then((value) => printStopwatchInfo(value))

    console.log("EXIT - my event listener");
});
console.log("\tScript - Event Listener Added");


const stopWatch = () => {
    console.log("\tENTER - stopWatch",);

    let randoSeconds = Math.floor(Math.random() * 10) + 1;

    const millis = randoSeconds * 1000;

    let theStartTime = new Date();

    console.log("\tEXIT - stopWatch - returning the promise");
    return new Promise(resolve => {
        console.log("\tENTER - Promise create");

        setTimeout(() => {
            console.log("ENTER - setTimeout trigger fn -- calling resolve");
            resolve({
                startTime: theStartTime,
                duration: randoSeconds,
                stopTime: new Date()});
            console.log("EXIT - setTimeout trigger fn -- after call to resolve");
        }, millis);

        console.log("\tEXIT - Promise create");
    });
};

function printStopwatchInfo(value)
{
    console.log("ENTER - resolved/then printStopwatchInfo");

    document.getElementById("start").textContent = "Started at: " + value.startTime;
    document.getElementById("stop").textContent = "Stopped at: " + value.stopTime;
    document.getElementById("duration").textContent = "Ran for: " + value.duration + " second(s).";
    myBtn.textContent = "Start...";
    myBtn.disabled = false;

    console.log("EXIT - resolved/then printStopwatchInfo");
}
console.log("EXIT - Script");
