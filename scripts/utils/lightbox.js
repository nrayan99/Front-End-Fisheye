/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const lightbox = document.getElementById('lightbox_modal')
const lightboxContent = document.querySelector('.lightbox-content')
const closeLightboxButton = document.querySelector(".close-lightbox")

closeLightboxButton.addEventListener("click", event => closeLightbox())

function displayContent() {
    lightboxContent.innerHTML = ''
    const mediaContainer = document.createElement('div')
    const media = document.createElement(links[indexModal].querySelector('video')? 'video' : 'img' )
    media.src = links[indexModal].href;
    media.setAttribute('controls', 'controls')
    media.setAttribute('id','lightbox-media')
    const mediaName = links[indexModal].firstChild.alt || links[indexModal].firstChild.title
    media.setAttribute('alt', mediaName)
    if (links[indexModal].querySelector('video') )  media.setAttribute('title', mediaName)
    const lightboxTitle = document.createElement( 'span' )
    lightboxTitle.textContent = mediaName
    mediaContainer.appendChild(media)
    lightboxContent.appendChild(mediaContainer)
    lightboxContent.appendChild(lightboxTitle)
}
function openLightbox() {
    displayContent()
    document.addEventListener('keydown', keyHandler)
    lightbox.style.display = "block"
}
function closeLightbox() {
    document.removeEventListener('keydown', keyHandler)
    lightbox.style.display = "none"
    lightboxContent.innerHTML = ''
}
function next() { 
    const media = lightboxContent.firstChild
    indexModal===links.length-1 ? indexModal=0 : indexModal++
    displayContent()
}
function prev() { 
    const media = lightboxContent.firstChild
    indexModal===0 ? indexModal=links.length-1 : indexModal--
    displayContent()
}

function keyHandler(e){
    switch (e.key){
        case 'ArrowLeft':
            prev()
            break;
        case 'ArrowRight':
            next()
            break;
        case 'Escape':
            closeLightbox()
            break;
    }
}