let addNoteButton = document.getElementById("submit")

let fetchNoteFromUser = document.querySelector("textarea")

let selectColor = document.querySelector("input")

let main2 = document.querySelector("#lower_part")

// click event on button for adding notes

addNoteButton.addEventListener('click' , () => {
    addNotesToDiv();
})

let inputvar = "";

fetchNoteFromUser.addEventListener('input', () => {
    inputvar = fetchNoteFromUser.value;
})


function addNotesToDiv(){

    // create a new div
    let newDiv = document.createElement("div");

    let removeNote = document.createElement("button");

    // fetch color from user input
    var colorCode = "";

    selectColor.addEventListener('input',(e) => {
        colorCode = selectColor.value;
        console.log(colorCode);
        newDiv.style.backgroundColor = colorCode;
    })

    newDiv.style.padding = "20px";
    newDiv.style.height = "fit-content"
    newDiv.style.width = "fit-content"
    newDiv.style.borderRadius = "5px"
    newDiv.innerText = "" + inputvar;
    newDiv.setAttribute("class","sticyNotes")
    main2.appendChild(newDiv);
    removeNote.innerText = "Delete";
    newDiv.appendChild(removeNote);

    if(inputvar.lenght === 0){
        alert("add Text");
        removeNote.remove()
        newDiv.remove();
    }

}