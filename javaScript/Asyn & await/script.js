
// function getData(){
//     //stimulate getting data from server.
//     return new Promise((resolve , reject) => {
//         setTimeout(() =>{
//              resolve(455);
//         }, 3500)
//     })
// }

async function getData(){
    //stimulate getting data from server.
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data = await x.json();
//    let data = await x.text(); // data in form of text.
   console.log(data);
    //   .then(response => response.json())
    //   .then(json => console.log(json))
}


async function main() {
console.log("loading moudules");

console.log("Do something else");

console.log("Load data");

let data = await getData(); // use await instead of then.

console.log(data);

console.log("Process data");

console.log("task 2");
}

main();
