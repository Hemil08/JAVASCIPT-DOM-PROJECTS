// CHANGE COLOR PORTION

const shape_col = document.querySelector('#change_color');

const random_color = Math.floor(Math.random()*16777215);

const startChangingColor = function(){
    shape_col.style.backgroundColor = random_color();
};

button.addEventListener("click", startChangingColor)



// // CHANGE SHAPE OPTION

const get_shape = document.querySelector('#change_shape');

let isTriangle = true;
let isSquare = false;
let isCircle = false;
let isRectangle = false;
let isDiamond = false;


const startChangingShape = function(){
    if(isTriangle){
        var  i = document.getElementById("triangle");       
        i.id = "square";
        isTriangle = false;
        isSquare = true;
    }

    else if(isSquare){
        var i = document.getElementById("square");
        i.id = "circle";
        isSquare = false;
        isCircle = true;
    }

    else if(isCircle){
        var i = document.getElementById("circle");
        i.id = "rectangle";
        isCircle = false;
        isRectangle = true;
    }

    else if(isRectangle){
        var i = document.getElementById("rectangle");
        i.id = "diamond";
        isRectangle = false;
        isDiamond = true;
    }

    else{
        var i = document.getElementById("diamond");
        i.id = "triangle";
        isDiamond = false;
        isTriangle = true;
    }
    
}


document.querySelector('#change_shape_button').addEventListener('click',startChangingShape)
// get_shape.addEventListener('click',startChangingShape)
