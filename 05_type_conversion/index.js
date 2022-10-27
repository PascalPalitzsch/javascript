// Type Conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)


let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
age += 1;
console.log(typeof age);

// Wenn man ein leeren String zu einem boolean konvertiert ist dieser falsch
// Wenn es ein String ist wie "pizza" ist er true (sobald was drin steht)

console.log("Happy Birthday! You are", age, "years old");