// console.log("Lets learn Arrays in JS");

// let nums = [1 , 2, 3, 4];
// // console.log(nums , typeof nums);
// // console.log(nums.length)

// // console.log(nums[2]);

// // nums[1] = 6; // arrays are mutable.
// // console.log(nums);

// console.log(nums.toString()); // array converted to string

// console.log(nums.join(" and "));  //put "and" between numbers.

// //pop 
// console.log(nums.pop());  // removes the last element.
// console.log(nums)

// //push

// console.log(nums.push("Arpita")); // adds element to the last. 
// console.log(nums);

// //shift
// // console.log(nums.shift());  //removes the first element and unshift add the element to the first.
// // console.log(nums);

// delete nums[2];
// console.log(nums);

// let a1 = [1 , 2, 3]
// let a2 = [4,  5, 6]
// let a3 = [9 , 8 , 7];

// console.log(a1.concat(a2 , a3));

//forEach loop in array

let numbers = [1 , 2, 3, 4, 5, 6];

// numbers.forEach((value , index , numbers) => {
//     console.log(value , index , numbers)
// });

let object = {
    a : 1,
    b : 2, 
    c : 3
}
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)){
//     const element = object[key];
//     console.log(key , element);
//     }
// }

// for (const element of numbers) {
//     console.log(element);
    
// }


let arr = [1 , 3 ,5, 11];
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     newArr.push(element**2);
// }
//map
let newArr = arr.map((e) => {
    return e**2;
})
console.log(arr);
console.log(newArr);

//filter
const greaterThanSeven = (e) =>{

    if(e > 7){
        return true;
    }
    return false;
}
console.log(newArr.filter(greaterThanSeven))
