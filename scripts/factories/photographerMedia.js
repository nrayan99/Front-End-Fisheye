function photographerMediaFactory(data) {
    const { title, image, video, likes, date, price, id } = data;
    const photographerFolder = photographerName.split(" ")[0]
    const mediaPicture = `assets/medias/${photographerFolder}/${image}`;
    const mediaVideo = `assets/medias/${photographerFolder}/${video}`;

    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        const media = video ? document.createElement( 'video' ) : document.createElement( 'img' )
        media.setAttribute('src', video ? mediaVideo : mediaPicture)
        media.setAttribute(video ? 'title':'alt', title)
        media.setAttribute('lang','en-US')
        const mediaLink = document.createElement( 'a' )
        mediaLink.href = video ? mediaVideo : mediaPicture
        const h3 = document.createElement('h3')
        const likesNb = document.createElement( 'span' )
        const cardInfos = document.createElement('div')
        const cardLikes = document.createElement('div')
        cardLikes.classList.add('card-likes')
        const heart = document.createElement('img')
        heart.setAttribute('src','assets/icons/heart.png')
        heart.setAttribute('alt','likes')
        heart.setAttribute('tabindex', 0)
        heart.classList.add('heart-img')
        cardInfos.classList.add('card-infos')
        likesNb. textContent = likes
        h3.textContent = title
        mediaLink.appendChild(media)
        cardLikes.appendChild(likesNb)
        cardLikes.appendChild(heart)
        cardInfos.appendChild(h3)
        cardInfos.appendChild(cardLikes)
        article.appendChild(mediaLink)
        article.appendChild(cardInfos);
        return (article);
    }
    return { getMediaCardDOM, likes }
}