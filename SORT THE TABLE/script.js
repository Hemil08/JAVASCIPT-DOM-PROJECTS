let table = document.getElementById("my-table")
let rows = Array.from(table.getElementsByTagName("tr"))
let sortvalueofTable = document.querySelector("button")

rows.shift();

let sortorder = "asc";

sortvalueofTable.addEventListener("click",() => {
    rows.sort((a,b) => {
        var nameA = a.getElementsByTagName("td")[0].textContent;
        var nameB = b.getElementsByTagName("td")[0].textContent;

        if(sortorder === 'asc'){
            return nameA.localeCompare(nameB);
        }
        else{
            return nameB.localeCompare(nameA);      
        }
    })

    rows.forEach((row) => {
        table.appendChild(row);
    })

    sortorder = sortorder === "asc" ? "desc":"asc"; 
})