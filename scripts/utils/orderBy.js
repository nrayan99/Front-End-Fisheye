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