//Mettre le code JavaScript lié à la page photographer.html
var photographerName;
let params = (new URL(document.location)).searchParams;
let photographerId = params.get('photographerId')
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
    var mediasData = [];
    medias.forEach(media => {
        if (media.photographerId == id)  mediasData.push(media)
    });
    return mediasData
}
async function displayData(photographer , medias) {
    const photographHeader = document.querySelector(".photograph-header");
    const photographCreations = document.querySelector(".photograph-creations")
    const photographerModel = photographerFactory(photographer);
    photographerName = photographerModel.name
    const userDescriptionDOM = photographerModel.getUserDescriptionDOM();
    photographHeader.insertBefore(userDescriptionDOM , photographHeader.firstChild);
    const img = document.createElement( 'img' )
    img.setAttribute("src", photographerModel.picture)
    photographHeader.appendChild(img)

    medias.forEach(media => { 
        const mediaModel = photographerMediaFactory(media)
        const mediaCardDOM = mediaModel.getMediaCardDOM()
        photographCreations.appendChild(mediaCardDOM)
    })

}
async function init() {
    const data = await fetchData()
    const photographer = await getPhotographerById(photographerId,data.photographers)
    const medias = await getMediasByPhotographerId(photographerId,data.media)
    displayData( photographer, medias  )
};

init()