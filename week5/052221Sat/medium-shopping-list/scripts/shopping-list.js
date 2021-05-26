document.getElementById("add-item-btn").addEventListener('click', addNewItemToList);
document.getElementById("myNeededItem").addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("add-item-btn").click();
      }
    });

function addNewItemToList()
{
    let myNeededItemWidget = document.getElementById("myNeededItem");
    let newItem = myNeededItemWidget.value;
    if(newItem)
    {
        let myShoppingList = document.getElementById("my-shopping-list");
        myShoppingList.append(makeListItem(newItem));
        myNeededItemWidget.value = "";
    }
}

function makeListItem(item)
{
    let listItem = document.createElement("li");
    listItem.appendChild(makeRemoveItemButton()); 
    listItem.appendChild(document.createTextNode(item));
    return listItem;
}

function makeRemoveItemButton()
{
    let removeItemButton = document.createElement("button");
    removeItemButton.classList.add("btn-list-item");
    removeItemButton.textContent = "X";
    removeItemButton.addEventListener("click", (theEvent) => theEvent.target.parentElement.remove() );
    return removeItemButton;
}