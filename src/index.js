console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', () =>{
    fetch('https://dog.ceo/api/breeds/image/random/4') 
    .then(resp => resp.json())
    .then(handleImage);
})


function handleImage(obj) {

for (const item of obj.message) {

    postImage(item)

}

}

function postImage(image) {

    const c = document.querySelector("#dog-image-container")
    const img = document.createElement("img")
    img.src = image

    c.append(img)

}



document.addEventListener('DOMContentLoaded', () =>{
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(output => handleAllBreeds(output));
})


function handleAllBreeds(obj) {

    

    const newObj = Object.entries(obj.message)

    const m = newObj
    
    m.map((e) => postBreed(e))
    
    }
    
    function postBreed(image) {
        
        
        console.log(image[0])
        console.log(image[1])
        const c = document.querySelector("#dog-breeds")
        const h = document.createElement("h3")
        const ul = document.createElement("li")

        h.innerText = image[0]
        ul.innerText = image[1]

        c.append(h,ul)
    
    }