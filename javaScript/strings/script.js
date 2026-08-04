console.log("Lets Learn strings in JS")

let name = "Arpita";
let friend = "Monica";
console.log(name)

console.log(name[0]);

//methods 
console.log(name.length)  //length of Arpita

//uppercase 
let b = "priya"
let c = "Ro";
let d = "han";
console.log(b.toUpperCase()); // converts to uppercase 
console.log(b.toLowerCase());  //converts to lower case
console.log(b.slice(1, 4)); //slicing

console.log(b.replace("iy" , "eey"));  //replaces the letters

console.log(c.concat(d));  //concatenation
console.log(name.concat(" Agarwal"));  //concatenation
console.log(b.charAt(0));  //char at particular index.
//template literals
console.log(`Her name is ${name} and her friend name is ${friend}`);


//escape sequence 
