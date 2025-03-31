// let k1 = document.getElementById("k1");
let keyCodeofProcess = document.getElementById("keyCodeOfPress");
let main = document.getElementById("main");
let main2 = document.getElementsByClassName("main2");
let k1 = document.getElementById("k1");

document.addEventListener('keypress',function(event){
    k1.innerText = event.key;
    keyCodeofProcess.innerText = event.keyCode;
})

