//Mettre le code JavaScript lié à la page photographer.html
let params = (new URL(document.location)).searchParams;
let photographerId = params.get('photographerId')

async function getPhotographerById(id) {
    const res = await fetch('data/photographers.json')
    const jsonRes = await res.json()
    const photographers = await jsonRes.photographers
    var photographerData;
    photographers.forEach(photographer => {
        if (photographer.id == id) photographerData = photographer
    });
    return photographerData
}
async function displayData(photographer) {
    const photographHeader = document.querySelector(".photograph-header");

    const photographerModel = photographerFactory(photographer);
    const userDescriptionDOM = photographerModel.getUserDescriptionDOM();
    photographHeader.insertBefore(userDescriptionDOM , photographHeader.firstChild);
    const img = document.createElement( 'img' )
    img.setAttribute("src", photographerModel.picture)
    photographHeader.appendChild(img)

}
async function init() {
    const photographer = await getPhotographerById(photographerId)
    displayData( photographer  )
};

init()