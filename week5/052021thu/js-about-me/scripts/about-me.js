function makeElement(newElement, textContent)
{
    let newNode = document.createElement(newElement);

    if(textContent)
    {
        newNode.textContent = textContent;
    }

    if(arguments.length > 2)
    {
        for(let i = 2; i < arguments.length; i++)
        {
            const val = arguments[i][1]
            let attrib = arguments[i][0];
            if("class" == attrib)
            {
                attrib = "className";
            }
            newNode[attrib] = val;
        }
    }
    
    return newNode;
}

const REL_STYLESHEET = ["rel", "stylesheet"];

const elementHead = document.getElementsByTagName("head")[0];
console.log(elementHead);

// <title>S'up?</title>
elementHead.append(
    makeElement("title", "JS S'up?")
);

// <link href="https://fonts.gstatic.com" rel="preconnect">
elementHead.append(
    makeElement("link", null, 
        ["href", "https://fonts.gstatic.com"], 
        ["rel", "preconnect"])
);

// <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">
elementHead.append(
    makeElement("link", null, 
        ["href", "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap"], 
        REL_STYLESHEET)
);

// <link href="styles/style.css" rel="stylesheet">
elementHead.append(
    makeElement("link", null, 
        ["href", "styles/style.css"], REL_STYLESHEET)
);

const elementBody = document.getElementsByTagName("body")[0];
console.log(elementBody);

// <div id="intro" class="aligncenter">
//      <h1>Greg Hamamgian</h1>
// </div>
let aDiv = makeElement("div", null, ["id", "intro"], ["class", "aligncenter"]);
aDiv.append(
    makeElement("h1", "Greg Hamamgian")
);
elementBody.append(aDiv);

// <div id="core">
//      <img src="images/headshot.jpg" id="headshot" alt="Picture of Greg">
//      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
// </div> 
aDiv = makeElement("div", null, ["id", "core"]);
let anImg = makeElement("img", null, 
    ["src", "images/headshot.jpg"], 
    ["id", "headshot"],
    ["alt", "Picture of Greg"]);
aDiv.append(
    makeElement("img", null, 
        ["src", "images/headshot.jpg"], 
        ["id", "headshot"],
        ["alt", "Picture of Greg"])
);

const superLongString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
aDiv.append(makeElement("p", superLongString));
elementBody.append(aDiv);

// <div id="socials" class="aligncenter">
//      <a href="https://www.instagram.com/42gmh/">
//          <img class="sociallogo" src="images/iglogo.png" alt="Instagram Logo">
//      </a>
//      <a href="https://github.com/42gmh?tab=repositories">
//          <img class="sociallogo" src="images/ghlogo.png" alt="GitHub Logo">
//      </a>
// </div>
aDiv = makeElement("div", null, ["id", "socials"], ["class", "aligncenter"]);
let anHref = makeElement("a", null, ["href", "https://www.instagram.com/42gmh/"]);

anHref.append(
    makeElement("img", null, 
        ["src", "images/iglogo.png"], 
        ["class", "sociallogo"], 
        ["alt", "Instagram Logo"])
);
aDiv.append(anHref);

anHref = makeElement("a", null, ["href", "https://github.com/42gmh?tab=repositories"]);
anHref.append(
    makeElement("img", null, 
        ["class", "sociallogo"], 
        ["src", "images/ghlogo.png"], 
        ["alt", "GitHub Logo"])
)
aDiv.append(anHref);

elementBody.append(aDiv);