// Height du menu
const menu = 80

// Position Y
let scrollPosition = 0

//*********** ANIMATION SECTION BANNER *************//

document.addEventListener("DOMContentLoaded", () => {
let elementBanner = document.querySelector('.banner div')
let elementImg = document.querySelector('.banner img')
let elementImgPosition = ((elementBanner.getBoundingClientRect().height / 2) - (elementImg.getBoundingClientRect().height / 2))

function parallaxBanner(elementBanner, elementImg, elementImgPosition) {
    elementImg.style.setProperty('--top', `${elementImgPosition}px`)
}

window.addEventListener("resize", () => {
    let elementBanner = document.querySelector('.banner div')
    let elementImg = document.querySelector('.banner img')
    let elementImgPosition = ((elementBanner.getBoundingClientRect().height / 2) - (elementImg.getBoundingClientRect().height / 2))
    parallaxBanner(elementBanner, elementImg, elementImgPosition);
})

parallaxBanner(elementBanner, elementImg, elementImgPosition);
})

//*********** ANIMATION SECTION STORY *************//

// Calcul de la distance entre l'élément et le haut de la page.
let elementStory = document.getElementById('story')
const elementStoryPosition = elementStory.getBoundingClientRect().top + window.scrollY

let elementPStory = elementStory.querySelector(".story__article p")
let animationStory = false

window.addEventListener("scroll", () => {
    scrollPosition = window.scrollY

    if (!animationStory && scrollPosition >= (elementStoryPosition - menu - 200)) {
        elementStory.classList.add('fade_in_section')
        elementStory.classList.remove('invisible')
        elementPStory.classList.add('anti_fade_in_section')
        elementPStory.classList.remove('invisible')

        const titleStory = document.querySelector('.story h2')
        const words = titleStory.innerText.split("'")
        titleStory.innerText = ""

        words.forEach((word, index) => {
            let createSpan = document.createElement("span")
            let contentSpan = document.createTextNode(word)
            createSpan.classList.add(`word_${index + 1}`)
            createSpan.appendChild(contentSpan)
            titleStory.appendChild(createSpan)

            if (index < words.length - 1) {
                let apostrophe = document.createElement("span")
                apostrophe.classList.add('apostrophe')
                apostrophe.textContent = "'"
                titleStory.appendChild(apostrophe)
            }
        });
        animationStory = true
    }
});


//*********** ANIMATION SECTION PERSONNAGES *************//

// Calcul de la distance entre l'élément et le haut de la page.
let elementCharacters = document.querySelector('.main-character')
const elementCharactersPosition = elementCharacters.getBoundingClientRect().top + window.scrollY

animationCharacters = false

window.addEventListener("scroll", () => {
    scrollPosition = window.scrollY

    if (!animationCharacters && scrollPosition >= (elementCharactersPosition - menu - 200)) {
        elementCharacters.classList.add('fade_in_section')
        elementCharacters.classList.remove('invisible')

        const titleCharacters = document.querySelector('.main-character h3')
        const words = titleCharacters.innerText.split(" ")
        titleCharacters.innerText = ""

        words.forEach((word, index) => {
            let createSpan = document.createElement("span")
            createSpan.classList.add(`word_${index + 1}`)
            let contentSpan = document.createTextNode(word)
            createSpan.appendChild(contentSpan)
            titleCharacters.appendChild(createSpan)

            if (index < words.length - 1) {
                let space = document.createTextNode(" ")
                titleCharacters.appendChild(space)
            }
        });
        animationCharacters = true
    }
});



//*********** ANIMATION SECTION LIEU *************//

// Calcul de la distance entre l'élément et le haut de la page.
let elementPlace = document.getElementById('place')
const elementPlacePosition = elementPlace.getBoundingClientRect().top + window.scrollY

const elementPPlace = elementPlace.querySelector("p")
animationPlace = false

window.addEventListener("scroll", () => {
    scrollPosition = window.scrollY

    if (!animationPlace && scrollPosition >= (elementPlacePosition - menu - 200)) {
        elementPlace.classList.add('fade_in_section')
        elementPlace.classList.remove('invisible')
        elementPPlace.classList.add('anti_fade_in_section')
        elementPPlace.classList.remove('invisible')
        

        const titlePlace = document.querySelector('#place h3')
        const words = titlePlace.innerText.split(" ")
        titlePlace.innerText = ""

        words.forEach((word, index) => {
            let createSpan = document.createElement("span")
            createSpan.classList.add(`word_${index + 1}`)
            let contentSpan = document.createTextNode(word)
            createSpan.appendChild(contentSpan)
            titlePlace.appendChild(createSpan)

            if (index < words.length - 1) {
                let space = document.createTextNode(" ")
                titlePlace.appendChild(space)
            }
        });
        animationPlace = true
    }
});



// Fonction pour mettre à jour la position de l'élément en fonction du scroll
function updateElementPosition() {
    // Calcul permettant de déclencher le parallax quand le scroll = position de l'élément -300px 
    const scrollDistance = window.scrollY - (elementPlacePosition - 200)

    // Coeficient de défilement des nuages
    const cloudsPosition = scrollDistance * 0.9

    // filtre de la position
    if (cloudsPosition >= 300) {
        elementPlace.style.setProperty('--pseudo-element-translate', `0px`)
    } else if (cloudsPosition < 0) {
        elementPlace.style.setProperty('--pseudo-element-translate', `-300px`)
    } else {
        elementPlace.style.setProperty('--pseudo-element-translate', `${-300 + cloudsPosition}px`)
    }
}

// Écoute de l'événement de défilement de la fenêtre
window.addEventListener('scroll', updateElementPosition)




//*********** ANIMATION SECTION STUDIO *************//

// Calcul de la distance entre l'élément et le haut de la page.
let elementStudio = document.getElementById('studio')
let elementStudioPosition = elementStudio.getBoundingClientRect().top + window.scrollY

let animationStudio = false
let elementPStudio = elementStudio.querySelectorAll("p")

window.addEventListener("scroll", () => {
    scrollPosition = window.scrollY

    if (!animationStudio && scrollPosition >= (elementStudioPosition - menu - 200)) {
        elementStudio.classList.add('fade_in_section')
        elementStudio.classList.remove('invisible')
        elementPStudio.forEach(p => {
            p.classList.add('anti_fade_in_section')
            p.classList.remove('invisible')
        });

        const title = document.querySelector('#studio h2')
        const words = title.innerText.split(' ')
        title.innerText = ""

        words.forEach((word, index) => {
            let createSpan = document.createElement("span")
            createSpan.classList.add(`word_${index + 1}`)
            let contentSpan = document.createTextNode(word)
            createSpan.appendChild(contentSpan)
            title.appendChild(createSpan)

            if (index < words.length - 1) {
                let space = document.createTextNode(" ")
                title.appendChild(space)
            }
        });
        animationStudio = true
    }
});


//*********** ANIMATION SECTION AWARD *************//

// Calcul de la distance entre l'élément et le haut de la page.
let elementAward = document.getElementById('award')
let elementAwardPosition = elementAward.getBoundingClientRect().top + window.scrollY

let animationAward = false
let elementFooter = document.getElementById('colophon')

window.addEventListener("scroll", () => {
    scrollPosition = window.scrollY

    if (!animationAward && scrollPosition >= (elementAwardPosition - menu - 200)) {
        elementAward.classList.add('fade_in_section')
        elementAward.classList.remove('invisible')
        elementFooter.classList.add('fade_in_section')
        elementFooter.classList.remove('invisible')
        animationAward = true
    }
}); 