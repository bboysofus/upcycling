let main = document.querySelector('main')
let image = document.querySelector('#front')
let card = document.querySelector('.card')

let product1 = document.querySelector('#popUp1')
let product2 = document.querySelector('#popUp2')
let product3 = document.querySelector('#popUp3')
let product4 = document.querySelector('#popUp4')
let product5 = document.querySelector('#popUp5')
let product6 = document.querySelector('#popUp6')

let product11 = document.querySelector('#popUp1-1')
let product21 = document.querySelector('#popUp2-1')
let product31 = document.querySelector('#popUp3-1')
let product41 = document.querySelector('#popUp4-1')
let product51 = document.querySelector('#popUp5-1')
let product61 = document.querySelector('#popUp6-1')

let x = 1

const changeImage = () => {

    if(x == 1){
        front.style.backgroundImage = 'url("./assets/to.jpg")'
        x = 2
    }
    else if(x == 2){
        front.style.backgroundImage = 'url("./assets/tre.jpg")'
        x = 3   
    }
    else if(x == 3){
        front.style.backgroundImage = 'url("./assets/fire.jpg")'
        x = 4
    }
    else if(x == 4){
        front.style.backgroundImage = 'url("./assets/en.jpg")'
        x = 1
    }
}

setInterval(changeImage, 5000)

const over = (y) => {
    y.style.transform = 'scale(110%)'
}

const out = (y) => {
    y.style.transform = 'scale(100%)'
}

const show1 = () => {
    product1.style.zIndex = '10'
    product1.style.opacity = '100'
}
const vanish1 = () => {
    product1.style.opacity = '0'
    product1.style.zIndex = '-10'
}

const show2 = () => {
    product2.style.zIndex = '10'
    product2.style.opacity = '100'
}
const vanish2 = () => {
    product2.style.opacity = '0'
    product2.style.zIndex = '-10'
}

const show3 = () => {
    product3.style.zIndex = '10'
    product3.style.opacity = '100'
}
const vanish3 = () => {
    product3.style.opacity = '0'
    product3.style.zIndex = '-10'
}

const show4 = () => {
    product4.style.zIndex = '10'
    product4.style.opacity = '100'
}
const vanish4 = () => {
    product4.style.opacity = '0'
    product4.style.zIndex = '-10'
}

const show5 = () => {
    product5.style.zIndex = '10'
    product5.style.opacity = '100'
}
const vanish5 = () => {
    product5.style.opacity = '0'
    product5.style.zIndex = '-10'
}

const show6 = () => {
    product6.style.zIndex = '10'
    product6.style.opacity = '100'
}
const vanish6 = () => {
    product6.style.opacity = '0'
    product6.style.zIndex = '-10'
}


const show11 = () => {
    product11.style.zIndex = '10'
    product11.style.opacity = '100'
}
const vanish11 = () => {
    product11.style.opacity = '0'
    product11.style.zIndex = '-10'
}

const show21 = () => {
    product21.style.zIndex = '10'
    product21.style.opacity = '100'
}
const vanish21 = () => {
    product21.style.opacity = '0'
    product21.style.zIndex = '-10'
}

const show31 = () => {
    product3.style.zIndex = '10'
    product3.style.opacity = '100'
}
const vanish31 = () => {
    product31.style.opacity = '0'
    product31.style.zIndex = '-10'
}

const show41 = () => {
    product41.style.zIndex = '10'
    product41.style.opacity = '100'
}
const vanish41 = () => {
    product41.style.opacity = '0'
    product41.style.zIndex = '-10'
}

const show51 = () => {
    product51.style.zIndex = '10'
    product51.style.opacity = '100'
}
const vanish51 = () => {
    product51.style.opacity = '0'
    product51.style.zIndex = '-10'
}

const show61 = () => {
    product61.style.zIndex = '10'
    product61.style.opacity = '100'
}
const vanish61 = () => {
    product61.style.opacity = '0'
    product61.style.zIndex = '-10'
}

product1.addEventListener("click", vanish1)
window.addEventListener("scroll", vanish1)

product2.addEventListener("click", vanish2)
window.addEventListener("scroll", vanish2)

product3.addEventListener("click", vanish3)
window.addEventListener("scroll", vanish3)

product4.addEventListener("click", vanish4)
window.addEventListener("scroll", vanish4)

product5.addEventListener("click", vanish5)
window.addEventListener("scroll", vanish5)

product6.addEventListener("click", vanish6)
window.addEventListener("scroll", vanish6)


product11.addEventListener("click", vanish11)
window.addEventListener("scroll", vanish11)

product21.addEventListener("click", vanish21)
window.addEventListener("scroll", vanish21)

product31.addEventListener("click", vanish31)
window.addEventListener("scroll", vanish31)

product41.addEventListener("click", vanish41)
window.addEventListener("scroll", vanish41)

product51.addEventListener("click", vanish51)
window.addEventListener("scroll", vanish51)

product61.addEventListener("click", vanish61)
window.addEventListener("scroll", vanish61)