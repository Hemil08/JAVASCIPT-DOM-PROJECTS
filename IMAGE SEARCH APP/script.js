const accessKey = 'GuNjgTneCedrI2ZDOcI5CQID9ckLUPBN7cos_oKJ3gA';
const search_button = document.querySelector('#search-button');
const textValue = document.querySelector('#search-input');
const imagesContainer = document.querySelector('.search-results')
let page = 1;

 const fetchImages = async () =>{

    let searchBarText = textValue.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchBarText}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();    
    


    const result = data.results;
    showmore.style.display = "block";
    if (page === 1){
        imagesContainer.innerHTML = "";
    }

    page++;
    result.map((item) =>{
        let newDiv = document.createElement("div");
        let image = document.createElement("img");
        image.src = item.urls.small;
        image.alt = item.alt_description;
        newDiv.classList.add("newDivStyle");
        let imageLink= document.createElement("a");
        imageLink.classList.add("imageLink");
        imageLink.target = "_blank";
        imageLink.textContent = item.alt_description;

        // append image and anchor tag into new div and newdiv image wrapper div
        newDiv.appendChild(image);
        newDiv.appendChild(imageLink);
        imagesContainer.appendChild(newDiv);
    });
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    fetchImages();
})

showmore.addEventListener("click",() =>{
    fetchImages();
})