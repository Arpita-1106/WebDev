console.log("Lets learn Function in js");

nice("Arpita");
function nice(name) {
    console.log("Hey " + name + " Lets learn Functions in JS")
    console.log("Hey " + name + " Lets be productive")
}

function sum(a , b) {
    console.log(a + b);
    return a + b;
}

result1 = sum(3 , 5);
result1 = sum(7 , 3);
result1 = sum(3, 13, 5);

//arrow func
const func = (x) => {
    console.log("I am an arrow function" , x)
}

func(35)
