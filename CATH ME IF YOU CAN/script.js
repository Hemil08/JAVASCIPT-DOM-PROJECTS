let catch_me = document.getElementById("catch_me")

let elementWidth = catch_me.offsetWidth;

let heightOfViewport = document.documentElement.clientHeight - 100;
let widthOfViewport = document.documentElement.clientWidth - 100;

console.log(heightOfViewport);
console.log(widthOfViewport);

let bodyofhtml = document.querySelector("body");

catch_me.style.left = "0px";
catch_me.style.right = "0px";

catch_me.addEventListener("mouseover",(e) =>{

    let leftposition = Math.floor(Math.random()*widthOfViewport);
    let topposition = Math.floor(Math.random()*heightOfViewport);


    catch_me.style.left = leftposition + "px";
    catch_me.style.top = topposition + "px";


})