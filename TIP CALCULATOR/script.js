let button1 = document.getElementsByTagName('button')
let select = document.getElementsByTagName('select')
let amountDiv = document.getElementById('amount')
let totalTip = document.querySelector(".total")

// console.log(select[0].options);

let tip = {
    0 : 0,
    1 : 30,
    2 : 20,
    3 : 15,
    4 : 10,
    5 : 5,
}

let newDiv = document.createElement('div');
amountDiv.appendChild(newDiv);

button1[0].addEventListener('click', 
(e) =>{

    e.preventDefault();
    // display display 
    totalTip.style.display = "block";
    let bill = document.getElementById("billAmount").value;
    let review = select[0].options.selectedIndex;
    let tipValue = tip[review]/100;

    let noPeople = document.getElementById('num_people').value;

    let tipAmount = ((tipValue*bill)/noPeople).toFixed(4);
    newDiv.innerText = `${tipAmount}`;
});