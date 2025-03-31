
const autoSuggestion = (e) =>{
   displayResults (e.target.value) 
}

const displayResults = (searchQuery) => {
    let parent = document.getElementById("search_result_container");
    // console.log(parent);
    parent.innerHTML = "";

    const filterEmojiList = emojiList.filter( e => {
        // e.aliases.filter( sentense => sentense.includes(searchQuery))

        // let originWord = e.category.toLowerCase();
        searchQuery = searchQuery?.toLowerCase();
        // return originWord.search(searchQuery) != -1   

        let originQueryAccordingDescription = e.description.toLowerCase();
        let originQueryAccordingAliases = e.aliases.join(",").replaceAll("_"," ").toLowerCase;

        // filter according tags

        if(e.tags.some((el)=> el?.toLowerCase().startsWith(searchQuery))){
            return true;
        }

        // filter according to des
        if(originQueryAccordingDescription.indexOf(searchQuery) != -1){
            return true;
        }

        // filter according to alliases
        if(originQueryAccordingAliases.indexOf(searchQuery) != -1){
            return true;
        }
    })



emojiList.forEach( (e) => {
    // console.log(emojiList);
    let new_row = document.createElement("tr");
    let new_emoji = document.createElement("td");
    let new_aliases = document.createElement("td");
    let new_description = document.createElement("td");

    new_emoji.innerText = e.emoji;
    new_aliases.innerText = e.aliases.join(",");
    new_description.innerText = e.description;

    new_emoji.classList.add("emoji");
    new_emoji.classList.add("aliases");
    new_description.classList.add("description");

    new_row.appendChild(new_emoji) 
    new_row.appendChild(new_aliases)
    new_row.appendChild(new_description)

    parent.appendChild(new_row);
});
};


let searchValue = document.querySelector("input");
searchValue.addEventListener("keyup",autoSuggestion)


// document.getElementById("search_field").addEventListener("keyup",autoSuggestion)
window.onload = () => displayResults();