const friendInfo = {
    name: "Alan Turing",
    cell: "6017576",
    birthday: "June 23",
}

friendInfo.printMe = function(){
    console.log("Hi: " + this.name);
}

console.log(friendInfo);

friendInfo.printMe();