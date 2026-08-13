console.log("Hello");

let box = document.getElementsByClassName("box");
// console.log(box)

// box[2].style.backgroundColor = "green";

//document.getElementById("color").style.backgroundColor = "pink"

    
// to color all the boxes at once , we have to you for each for multiple elements
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "pink";
})

//tag name
let a = document.getElementsByTagName("div");
console.log(a);

//matches
a[4].matches("#color");
console.log(a[4].matches("#color")); //false 
console.log(a[3].matches("#color")); //true

