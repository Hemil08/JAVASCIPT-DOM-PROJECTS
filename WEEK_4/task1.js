let inputText = document.getElementById("search_bar")


inputText.addEventListener("keyup", ()=>{

    let filter,my_table,list,element,txtValue;

    filter = inputText.value.toLowerCase();

    // inputText = document.querySelector("input");

    my_table = document.querySelector(".lists");
    list = my_table.getElementsByTagName('tr');

    // console.log(list);

    for(let i=0;i<list.length;i++){
        let td = list[i].getElementsByTagName("td")[0];
        // console.log(element);

        // console.log(a);

        if(td){
            let txtValue = td.textContent || td.innerHTML;

            if (txtValue.toLowerCase().indexOf(filter) > -1){
                list[i].style.display = "block";
            }

            else{
                list[i].style.display = "none";
            }
        }

        
    
    }
})