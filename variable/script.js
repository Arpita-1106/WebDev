console.log("Hello World!!");

var a = 2;
var b = 5;  // var is a global scope and can be used anywhere in the program.
var c  = "Arpita";

let d = 3;
let e = 4;
//var 44d = "Arpita";  //Not Allowed.

// console.log(a + b + 8);
// console.log(typeof a , typeof b);
{
    let a = 66; //let is a block scope and can be use for the specific block and not outside the block.
    console.log(a);
}
    console.log(a); 

    let x = "Arpita";
    let y = 33;
    let z = 2.5;
    const p = true;
    let q = undefined;
    let r = null;

    console.log(x , y ,z , p , q , r);
    console.log(typeof x , typeof y , typeof z , typeof p , typeof q , typeof r);

    let o = {
        "name" : "Arpita",
       " Job role" : "SDE",
       "is_Handsome" : true
    }

    console.log(o);
    o.salary = "30000";
    console.log(o);




    //const a1 = 6; // const is used to make a value constant that can not be changed.
// a1 = a1 + 1; //Not allowed because a1 is constant.
