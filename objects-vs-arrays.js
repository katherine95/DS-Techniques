// An object with some properties 
const person = {"name": "Clark", "surname": "Kent", "age": "36"};
const fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
// [0: "Apple"]
 
// Iterating over properties in the object  
for(const key in fruits) {  
    console.log(key, fruits[key])
}

// Iterating over array
let letters = ["a", "b", "c", "d", "e", "f"];

for(let letter of letters) {
    console.log(letter); // a,b,c,d,e,f
}

// Iterating over string
let greet = "Hello World!";
console.log(greet.length)

for(let character of greet) {
    console.log(character); // H,e,l,l,o, ,W,o,r,l,d,!
}