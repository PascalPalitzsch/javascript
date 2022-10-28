// array.forEach() = executes a provided callback function
//                   once for each array element

let students = ["paul", "peter", "udo"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring();
}

function print(element){
    console.log(element);
}