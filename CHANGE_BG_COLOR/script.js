const shape_bg_col = document.querySelector('.main');

const random_color = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

const change_color = function(){

    

    shape_bg_col.style.backgroundColor = random_color();
}

document.querySelector("#change_button").addEventListener("click",change_color)