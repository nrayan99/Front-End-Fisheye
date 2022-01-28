function photographerMediaFactory(data) {
    const { title, image, video, likes, date, price, id } = data;
    const photographerFolder = photographerName.split(" ")[0]
    const mediaPicture = `assets/medias/${photographerFolder}/${image}`;
    const mediaVideo = `assets/medias/${photographerFolder}/${video}`;

    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        const media = video ? document.createElement( 'video' ) : document.createElement( 'img' )
        media.setAttribute('src', video ? mediaVideo : mediaPicture)
        const h3 = document.createElement('h3')
        h3.textContent = title 
        article.appendChild(media)
        article.appendChild(h3);
        return (article);
    }
    return { getMediaCardDOM }
}