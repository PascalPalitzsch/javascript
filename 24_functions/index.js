// function = Define code once, and use it many times.
//            To perform some code, call the function name.

// happyBirthday(); // function call

startProgram();

function startProgram(){
    let userName = "Pascal";
    let age = 21;

    happtyBirthday(userName, age); // Man muss die Variablen an die Funktion übergeben
}
    


function happtyBirthday(a, b){ // Man muss die Variablen der Funktion übergeben // a = Pascal
    console.log("Happy birthday to you!"); 
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", a);
    console.log("Happy birthday to you!");
    console.log("You are", b, "years old!"); // b = 21
}