console.log('Arpita');

let prom1 = new Promise((resolve , reject) => {
    let a = Math.random();
    console.log(a);
    if(a < 0.5){
        reject("No random number was not supporting you")
    }else{
        setTimeout (() => {
        console.log("yes I am done")
        resolve("Arpita")
    }, 3000);
  }
})

let prom2 = new Promise((resolve , reject) => {
    let a = Math.random();
    console.log(a);
    if(a < 0.5){
        reject("No random number was not supporting you Ahhhhh")
    }else{
        setTimeout (() => {
        console.log("yes I am done for now")
        resolve(" Hey , Arpita ")
    }, 2000);
  }
})

let p3 = Promise.all([prom1 , prom2]);
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })
