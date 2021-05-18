"use strict"

const black     = "#000000"; 
const blue      = "#0000ff"; 
const brown     = "#964B00";
const red       = "#ff0000"; 
const white     = "#ffffff"; 
const yellow    = "#ffff00";
const flesh     = "#ffe9d1";

const boots_ = brown;
const button = yellow;
const cap___ = red;
const eye___ = black;
const hair__ = brown;
const pants_ = blue;
const shirt_ = red;
const skin__ = flesh;
const space_ = white;
const stache = black;
        
let marioMap = [
    [space_, space_, space_, cap___, cap___, cap___, cap___, cap___, cap___, space_, space_, space_], // 1
    [space_, space_, cap___, cap___, cap___, cap___, cap___, cap___, cap___, cap___, cap___, space_], // 2
    [space_, space_, hair__, hair__, hair__, skin__, skin__, eye___, skin__, space_, space_, space_], // 3
    [space_, hair__, skin__, hair__, skin__, skin__, skin__, eye___, skin__, skin__, skin__, space_], // 4 
    [space_, hair__, skin__, hair__, hair__, skin__, skin__, skin__, stache, skin__, skin__, skin__], // 5
    [space_, hair__, hair__, skin__, skin__, skin__, skin__, stache, stache, stache, stache, space_], // 6
    [space_, space_, skin__, skin__, skin__, skin__, skin__, skin__, skin__, skin__, space_, space_], // 7
    [space_, space_, shirt_, shirt_, pants_, shirt_, shirt_, shirt_, space_, space_, space_, space_], // 8
    [space_, shirt_, shirt_, shirt_, pants_, shirt_, shirt_, pants_, shirt_, shirt_, shirt_, space_], // 9
    [shirt_, shirt_, shirt_, shirt_, pants_, pants_, pants_, pants_, shirt_, shirt_, shirt_, shirt_], // 10
    [skin__, skin__, shirt_, pants_, button, pants_, pants_, button, pants_, shirt_, skin__, skin__], // 11
    [skin__, skin__, skin__, pants_, pants_, pants_, pants_, pants_, pants_, skin__, skin__, skin__], // 12
    [skin__, skin__, pants_, pants_, pants_, pants_, pants_, pants_, pants_, pants_, skin__, skin__], // 13
    [space_, space_, pants_, pants_, pants_, space_, space_, pants_, pants_, pants_, space_, space_], // 14
    [space_, boots_, boots_, boots_, space_, space_, space_, space_, boots_, boots_, boots_, space_], // 15
    [boots_, boots_, boots_, boots_, space_, space_, space_, space_, boots_, boots_, boots_, boots_]  // 16
];

function drawMario()
{
    for(let i = 0; i < marioMap.length; i++)
    {
        document.writeln('<div class="row">');
        for(let j = 0; j < 12; j++)
        {
            document.writeln(
                `<div class="col-auto my-contents" 
                style="background-color:${marioMap[i][j]};"></div>`);
        }
        document.writeln('</div>');
    }
}