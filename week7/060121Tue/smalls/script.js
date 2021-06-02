console.log("Hi!");
// const request = new XMLHttpRequest();
// console.log("Initial:", request);

// let x = 0;
// request.onreadystatechange = function () {
//     console.log("On Ready State Change...", x++);
//     if(4 === this.readyState && 200 == this.status)
//     {
//         console.log("This:", this);
//     }
// };

// console.log("After setting on ready state change:", request);

// request.open("GET", "./sample.txt");
// request.send();

fetch("./sample.txt").then((response) => {
    console.log("fetch:", response);
    const result = response.text().then((data) => document.getElementById("my-text").textContent = data);
    ;
  });