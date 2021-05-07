"use strict";

let cookieCnt = 5;

while(cookieCnt > 0)
{
    console.log("One for me.");
    cookieCnt--; // take away my cookie
    cookieCnt ? console.log("One for you.") : console.log("None for you");
    cookieCnt--; // take away your cookie
}