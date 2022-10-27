// useful string properties & methods

let userName = "Pascal Palitzsch";
let phoneNumber = "123-456-7890";


console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("a"));
console.log(userName.lastIndexOf("a"));

//userName = userName.trim();
//userName = userName.toUpperCase();
//userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);