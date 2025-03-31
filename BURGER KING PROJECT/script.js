const form = document.querySelector('form');
const imageContainer = document.getElementById('imageContainer');

form.addEventListener('change',() => {

    const checkboxes = document.querySelectorAll('input[name="image"]:checked');
    const promises = Array.from(checkboxes).map(checkbox => loadImage(checkbox.value));

    Promise.all(promises)
    .then(images =>{
        imageContainer.innerHTML = '';
        images.forEach(image =>{
            imageContainer.appendChild(image);
        })
    }) 
    .catch(error =>{
        console.error('Error loading images:',error);
    });

});

function loadImage(imageName){
    return new Promise((resolve,reject) =>{
        const img = new Image();
        img.src = `${imageName}.avif`;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load Image: ${imageName}`));
    })
}