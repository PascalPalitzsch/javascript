// nested functions
// = Functions inside other functions.
// Outer functions have access to inner functions.
// Inner function are "hidden" from outside the outer function.
// used in closures


let userName ="Pascal";
let userInbox = 0;

login(); // first need to login otherwise you dont have access to function displayUserName and displayUserInbox

function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}
