function clickOrderBy() {
  const notClickedList = document.querySelectorAll(".not-clicked")
  const clickedList = document.querySelectorAll(".clicked")
  for (var i = 0; i < notClickedList.length; ++i) {
    notClickedList[i].classList.remove('not-clicked');
    notClickedList[i].classList.add('clicked');
  }
 for (var i = 0; i < clickedList.length; ++i) {
  clickedList[i].classList.add('not-clicked');
  clickedList[i].classList.remove('clicked');
  }
}


async function secondaryButtonsClick(e) {
  const actualButtonText = e.textContent
  const filter = document.querySelectorAll(".order-by-buttons button span")
  const actualFilterText = filter[0].textContent
  filter[0].textContent = actualButtonText
  e.textContent = actualFilterText
  clickOrderBy()
  photographCreations.innerHTML=''
  photographDetails.innerHTML=''
  const medias = await getMediasByPhotographerId(photographerId,data.media)
  displayMedias(medias, actualButtonText)
  displayPhotographDetails(price)
}