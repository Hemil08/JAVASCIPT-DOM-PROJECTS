const show_details_button = document.querySelectorAll('.product_button')
const search_bar = document.querySelector('#search_bar')
const search_button = document.querySelector('.search_section_button')

// console.log(show_details_button);

async function getData() {
    const url = "https://openapi.programming-hero.com/api/phones?search=oppo";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }


  

