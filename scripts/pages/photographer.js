//Mettre le code JavaScript lié à la page photographer.html
var photographerName;
let params = (new URL(document.location)).searchParams;
let photographerId = params.get('photographerId')
let likes = 0 ;
let data = []
let price = 0;
let mediasData = []
let links = []
let indexModal = 0
const photographHeader = document.querySelector(".photograph-header");
const photographCreations = document.querySelector(".photograph-creations")
const photographDetails = document.querySelector(".photograph-details")
const modal = document.getElementById("contact_modal");


async function fetchData(){
    const res = await fetch('data/photographers.json')
    const jsonRes = await res.json()
    return jsonRes
  }
async function getPhotographerById(id,photographers) {
    var photographerData;
    photographers.forEach(photographer => {
        if (photographer.id == id) photographerData = photographer
    });
    return photographerData
}
async function getMediasByPhotographerId(id,medias){
    medias.forEach(media => {
        if (media.photographerId == id)  mediasData.push(media)
    });
}
async function displayData(photographer , medias) {
    const photographerModel = photographerFactory(photographer);
    photographerName = photographerModel.name
    const userDescriptionDOM = photographerModel.getUserDescriptionDOM();
    photographHeader.insertBefore(userDescriptionDOM , photographHeader.firstChild);
    const img = document.createElement( 'img' )
    img.setAttribute("src", photographerModel.picture)
    img.setAttribute("alt", photographerModel.name)
    photographHeader.appendChild(img) 
    displayMedias(medias)
    price = photographerModel.price
    displayPhotographDetails(price)
    modal.querySelector('h1').textContent += ' '+ photographerName
    modal.setAttribute('aria-labelledby', modal.querySelector('h1').textContent)
}
function displayMedias(medias, filter) {
    likes=0
    if (filter === 'Date') medias.sort((a, b) => ( Date.parse(b.date) - Date.parse(a.date)))
    else if (filter === 'Titre') medias.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
    else medias.sort((a, b) => parseFloat(b.likes) - parseFloat(a.likes));
    medias.forEach(media => {
        const mediaModel = photographerMediaFactory(media)
        const mediaCardDOM = mediaModel.getMediaCardDOM()
        photographCreations.appendChild(mediaCardDOM)
        likes+= mediaModel.likes
    }
    )
    const hearts = document.querySelectorAll(".photograph-creations .heart-img")
    for (const heart of hearts) {
     heart.addEventListener('click', event=>(toggleLike(event)))
    }
    links = document.querySelectorAll('.photograph-creations a')
    let i = 0;
    links.forEach(link=> {
        let j = i 
        link.addEventListener("click", function(e){
        indexModal = j
        e.preventDefault();
        openLightbox()

        });
        i++
    })
}
function displayPhotographDetails(price) {
    const likeDetails = document.createElement('div')
    likeDetails.classList.add('like-details')
    const totalLikes = document.createElement('span')
    const heart = document.createElement('img')
    heart.setAttribute('alt','likes')
    const pricing = document.createElement('span')
    pricing.textContent = `${price}€/jour`
    heart.setAttribute('src','assets/icons/black-heart.png')
    totalLikes.textContent = likes
    likeDetails.appendChild(totalLikes)
    likeDetails.appendChild(heart)
    photographDetails.appendChild(likeDetails)
    photographDetails.appendChild(pricing)
}

async function init() {
    data = await fetchData()
    const photographer = await getPhotographerById(photographerId,data.photographers)
    const medias = await getMediasByPhotographerId(photographerId,data.media)
    displayData( photographer, mediasData  )
};

init()