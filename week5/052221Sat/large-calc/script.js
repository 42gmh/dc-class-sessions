let nums = [];
let ops = []
let currentNum = "";
let needToReset = false;

const myDisplay = getElem("display");

getElem("ac").addEventListener("click", () => {
    clearState();
    logState();
});

addListeners("btn-num", numBtnEventListener);
addListeners("btn-op", opBtnEventListener);
getElem("equal").addEventListener("click", doTheCalc);

function addListeners(buttonClass, callbackFn)
{
    let btns = document.getElementsByClassName(buttonClass);
    for(let i =0; i< btns.length; i++) {
        btns[i].addEventListener("click", callbackFn);
    }
}

function doTheCalc(event)
{
    if("" != currentNum) // pick up the last #
    {
        nums.push(Number.parseInt(currentNum));
    }

    if(nums.length == ops.length) // ended with a + or -
    {
        nums.push(0);
    }

    let total = nums[0];
    for(let i=1; i < nums.length; i++)
    {
        let op = ops[i-1];
        let num = nums[i];

        "+" == op ? total += num : total -= num;

        console.log(total);
    }

    clearState();
    myDisplay.value = total;
    needToReset = true;
    logState();
}

function getElem(elementId)
{
    return document.getElementById(elementId);
}

function numBtnEventListener(event)
{
    if(needToReset)
    {
        clearState();
        needToReset = false;
    }

    let numTxt = event.target.textContent;

    myDisplay.value += numTxt;
    currentNum += numTxt;

    logState();
}

function opBtnEventListener(event)
{
    if(needToReset)
    {
        clearState();
        needToReset = false;
    }

    if("" != currentNum)
    {
        nums.push(Number.parseInt(currentNum));
        currentNum = "";

        let newOp = event.target.textContent;
        ops.push(newOp);
        myDisplay.value += newOp;
    }

    logState();
}

function logState()
{
    console.log("nums:", nums);
    console.log("ops:", ops);
    console.log("curr num:", currentNum);
    console.log("text:", myDisplay.value);
}

function clearState()
{
    myDisplay.value = "";
    nums = [];
    ops = [];
    currentNum = "";
}