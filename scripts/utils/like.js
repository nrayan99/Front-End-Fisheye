/* eslint-disable no-unused-vars */
function toggleLike(e){
    const totalLikes = document.querySelector('.photograph-details span')
    if (e.target.classList.contains('clicked')) {
        e.target.classList.remove('clicked')
        e.path[0].previousElementSibling.innerText--
        totalLikes.textContent--
    }
    else {
        e.target.classList.add('clicked')
        e.path[0].previousElementSibling.innerText++
        totalLikes.textContent++
    }
    
}