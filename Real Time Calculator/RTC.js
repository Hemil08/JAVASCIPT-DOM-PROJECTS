let Total_character = document.getElementById("Total_character")
let Remaining = document.getElementById('Remaining')

let text_input = document.getElementById('counter')

let inputData = "";
let Total_character_value = 0;
let remaining_value = 0;

text_input.addEventListener("input",(e) =>{
    inputData = text_input.value;
    Total_character_value = inputData.length;

    remaining_value = 50-Total_character_value;

    Total_character.innerText = Total_character_value;
    Remaining.innerText = remaining_value;
})

    // text_input.addEventListener("keypress",(e)=>{
    //     if(Total_character_value.length >= 50){
    //         e.preventDefault();
    //     }
    
// })