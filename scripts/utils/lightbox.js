const lightbox = document.getElementById('lightbox_modal')
const lightboxContent = document.querySelector('.lightbox-content')
function displayContent() {
    lightboxContent.innerHTML = ''
    const mediaContainer = document.createElement('div')
    const media = document.createElement(links[indexModal].querySelector('video')? 'video' : 'img' )
    media.src = links[indexModal].href;
    mediaName = links[indexModal].firstChild.alt || links[indexModal].firstChild.title 
    media.setAttribute(links[indexModal].querySelector('video') ? 'title' : 'alt', mediaName)
    lightboxTitle = document.createElement( 'span' )
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