
 
 let random = Math.random()
 console.log(random)

 let a = prompt("Enter first Number: ")
 let c = prompt("Enter the operation: ")
 let b = prompt("Enter second Number: ")
 
 let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
 }
//Performs correct operation.
 if(random > 0.1){
    alert(`The result is ${eval(` ${a} ${c} ${b}` )}`)
 }else{
    //performs wrong operation.
    c = obj[c];
    alert(`The result is ${eval(` ${a} ${c} ${b}` )}`)
 }

