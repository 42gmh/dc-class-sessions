document.getElementById("heading").textContent = "Toppings";
document.getElementById("burger").classList.add("list-item");

let chiliLi = document.createElement("li");
chiliLi.textContent = "Chili";
document.getElementById("list").append(chiliLi);

let heirloomAnchor = document.createElement('a');
heirloomAnchor.href = "https://heirloommarketbbq.com/"
heirloomAnchor.textContent = "Eat Here!";

let eatHereH2 = document.createElement('h2');
eatHereH2.appendChild(heirloomAnchor);

let myBody = document.getElementsByTagName("body")[0];
myBody.appendChild(eatHereH2);