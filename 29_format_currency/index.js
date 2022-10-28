// toLocaleString() = returns a string with a language
//                    sensitive representation of this number  

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options


let myNum = 123456.789;

// myNum = myNum.toLocaleString("de-DE"); // For every language different!!!!

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}); //currency

console.log(myNum);