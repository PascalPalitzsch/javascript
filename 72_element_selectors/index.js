/*
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";
*/

/*
// Get Elements by her Name
let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit =>{
    if(fruit.checked){
        console.log(fruit.value);
    }
})
*/

/*
// Get Elements by id
let vegetables = document.getElementsByTagName("li");
vegetables[1].style.backgroundColor = "lightgreen";
*/

/*
//Get Element by className
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen";
*/

/*
// Get Element by querySelector
let element = document.querySelector("#myTitle");
element.style.backgroundColor = "lightgreen";
*/

let elements = document.querySelectorAll("li");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})