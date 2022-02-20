/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const closeContactButton = document.querySelector(".close-contact")
const contactButton = document.querySelector(".contact_button")
const submitForm = document.querySelector(".modal form")

submitForm.addEventListener('submit', event => handleSubmit(event))
contactButton.addEventListener('click', event => displayModal())
closeContactButton.addEventListener('click', event => closeModal())

function displayModal() {
	modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function handleSubmit(e) {
    e.preventDefault()
    
    const firstName = modal.querySelector('#firstName').value
    const lastName = modal.querySelector('#lastName').value
    const email = modal.querySelector('#email').value
    const yourMessage = modal.querySelector('#yourMessage').value
    console.log(firstName, lastName, email, yourMessage)
    modal.getElementsByTagName('form')[0].reset()
    closeModal()
    return false
}
