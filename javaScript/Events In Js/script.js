let button = document.getElementById("btn"); 
 

//events 
//1. click
button.addEventListener("click" , () =>{
    alert("Inner html is changing...")

})
button.addEventListener("click" , () =>{
    document.querySelector(".box").innerHTML = "<b> Heyy you were clicked?? </b> Enjoy !!"
})

//double click
button.addEventListener("hover", () =>{
    document.querySelector(".box").style.backgroundColor = "blue"
})

document.addEventListener("keydown" , (e) => {
    console.log(e , e.key , e.keycode);
})

