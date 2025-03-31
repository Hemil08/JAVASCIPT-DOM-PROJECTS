let btn = document.getElementById("btn");

// GET
// PUT
// DELETE
// POST

/*const option = {
    method:"GET",
    header:{
        "x-Api-Key":"key-name"
    }
}*/

async function getJokes(){

    try{
        let data = await fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        data = await  data.json()
        data.forEach(element => {
            
        });
    }

    catch{

    }
}
 
btn.addEventListener("click",getJokes)

