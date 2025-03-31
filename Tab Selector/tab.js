let ai_tab = document.querySelector(".step1");
let dataScience_tab = document.querySelector(".step2");
let softwareDevelopment_tab = document.querySelector(".step3")
let image = document.querySelector("img");

let p1 = document.querySelector("#p1")
let p2 = document.querySelector('#p2')
let p3 = document.querySelector('#p3')

ai_tab.addEventListener("click",function(){
    p1.style.display = "block"
    p2.style.display = "none"
    p3.style.display = "none"

    image.src = "AI_IMAGE.AVIF"
})

dataScience_tab.addEventListener("click",function(){
    p1.style.display = "none"
    p2.style.display = "block"
    p3.style.display = "none"

    image.src = "DATA_SCIENCE_IMAGE.avif"

})

softwareDevelopment_tab.addEventListener("click",function(){
    p1.style.display = "none"
    p2.style.display = "none"
    p3.style.display = "block"

    image.src = "SOFTWARE_DEVELOPMENT_IMAGE.avif"
})
