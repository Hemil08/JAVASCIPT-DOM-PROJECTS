let getball =  document.getElementById("ball");

// variable for top and left

let t=0,l=0;
let elementwidth = getball.offsetWidth;
let deg = 0;

document.addEventListener("keydown", (e) => {
    let browserHeight = document.documentElement.clientHeight;
    let browserWidth = document.documentElement.clientWidth;

    let key = e.key;
    console.log(key);

    // deg += 120;

    // Move ball to the right side
    if(key == "ArrowRight" || key == 'd'){
        if(elementwidth+l+20 <= browserWidth){
            getball.style.left = l + 20 + 'px';
            l += 20;
            // getball.style.transition = "0.5s";
        }
    }


    // Move ball to the down side
    if(key == "ArrowDown" || key == 's'){
        if(elementwidth+t+20 <= browserHeight){
            getball.style.top = t+20+'px';
            t += 20;
            ball.style.transform = `rotate(${deg}deg)`;
            ball.style.transition = "0.5s";
        }
    } 

    // Move ball to the leftside
    if(key == "ArrowLeft" || key =='a'){
        if( l-20 >= 0){
            ball.style.left = l-20+'px';
            l -= 20;
            ball.style.transform = `rotate(${deg}deg)`;
            ball.style.transition = "0.5s";
        }
    }

    // Move with w and upward

    if(key == "ArrowUp" || key =='w'){
        if( l-20 >= 0){
            ball.style.left = l-20+'px';
            l -= 20;
            ball.style.transform = `rotate(${deg}deg)`;
            ball.style.transition = "0.5s";
        }
    }

})