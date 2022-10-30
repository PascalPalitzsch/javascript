// Map = object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50],
]);

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("underwear");

// store.get("t-shirt")
store.set("hat", 40);
store.delete("t-shirt");
console.log(store.has("hat")); // returns a boolean value



console.log(shoppingCart);

store.forEach((value, key) => console.log(`${key} $${value}`));