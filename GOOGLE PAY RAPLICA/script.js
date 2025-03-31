let input = document.getElementById("myvalue")
let container = document.querySelector(".container")
let paybutton = document.querySelector(".submit")
let finalresult = document.querySelector('.wrapper')
let main_container = document.querySelector(".main_Container")
let Payment_done_message = document.querySelector(".Payment_done_message")

let loader = document.querySelector(".loader")

input.addEventListener("input", (e) =>{
    // console.log(inputText.value);
    paybutton.innerText = `Pay  $ ${input.value}`
    Payment_done_message.innerText  = `$ ${input.value} hase been done!` 
})


paybutton.addEventListener("click",(e) => {
        
    if(input.value < 0 || input.value > 100000){
        alert("You have entered wrong amount");
    }

    else if(input.value === ""){
        alert("Please enter an amount")
    }

    else{
        main_container.style.display = "none";
    loader.style.display = "block";

    setTimeout(()=>{
        loader.style.display = "none";
        finalresult.style.display = "block";
    },5000)
    }
    

})