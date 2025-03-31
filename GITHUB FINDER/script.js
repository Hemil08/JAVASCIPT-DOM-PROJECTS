//https://api.github.com/users

let searchForm = document.querySelector(".search-form");
let userCardContainer = document.querySelector(".user-card");
let loader = document.querySelector(".loader");

let getUser = async () => {
    let keyword = document.querySelector(".keyword");
    // console.log(keyword.value);

    if (keyword.value.length <= 0) {
        userCardContainer.innerHTML = loader.innerHTML;
    }
    else {
        loader.innerHTML = `<i class="fas fa-spinner"></i>`
        let response = await fetch(`https://api.github.com/users/${keyword.value}`);
        let result = await response.json();
        let data = await result;
        console.log(data);
        showuser(data);
        loader.innerHTML = 'Please enter your github username.'
    }

    // if(keyword.value.length){

    // }
};

let showuser = (data) => {
    if (data.message === 'Not found') {
        loader.innerHTML = 'User not found';
        userCardContainer.innerHTML = loader.innerHTML;
    }
    else {
        let userCardHtml = `
        <div class="head d-flex center">
            <img src="${data.avatar_url}" alt="${data.name}"
            class="photo">

            <div class="d-flex between w-100 sub">
                <div> 
                    <h1 class="name fw-bold"> ${(data.name) ? data.name:'-'} </h1> 
                    <a href ="${data.html_url}" class="username" target="_blank">@${data.login} </a>
                </div>
                <p class="joined">Joined ${new Date(data.created_at).toLocaleString('en-US')}</p>
            </div>
        </div>

        <div>

            <p class="bio"> ${(data.bio) ? data.bio:'-'}</p>
            <ul class="card d-flex center between">

                <li>
                    <h6 class="mb-5">Repos</h6> 
                    <span class="fw-bold">${data.public_repos}</span>
                </li> 

                 <li>
                    <h6 class="mb-5">Followers</h6> 
                    <span class="fw-bold">${data.following}</span> 
                </li> 
            
            </ul>

            <div>
            <ul>
                <li>
                    <i class="fas fa-fw fa-map-marked-alt"> </i>
                    <span>${(data.twitter_username) ? data.blog : '-'}</span>
                </li>

                <li>
                    <i class="fas fa-fw fa-map-marked-alt"> </i>
                    <span>${(data.company) ? data.company:  '-'}</span>
                </li>

                <li>
                    <i class="fas fa-fw fa-link"> </li>
                    <span> ${(data.blog) ? data.blog :'-'} </span>
                </li>

                <i class="fas fa-fw fa-link"> </i>
                <span>${(data.blog)}

            </ul>
            </div>
        </div>
        `
        userCardContainer.innerHTML = userCardHtml      
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getUser();
})