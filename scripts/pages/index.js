/* eslint-disable no-undef */

async function getPhotographers() {
    const res = await fetch('data/photographers.json')
    const jsonRes = await res.json()
    const photographers = await jsonRes.photographers
    return ({
        photographers: photographers})

    }
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = new photographerFactory('photographer',photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    