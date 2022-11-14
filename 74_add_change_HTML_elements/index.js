// add / change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)


// Its unsafe!!
/*
const nameTag = document.createElement("h1");
nameTag.innerHTML = window.prompt("Enter your name:");
document.body.append(nameTag);
*/


const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
// myList.append(listItem);  // -> bottom
// myList.prepend(listItem); // -> top
myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]); // Some where in the List