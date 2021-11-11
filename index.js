let main = document.querySelector('main')
let images = ['assets/1.jpg','assets/2.jpg','assets/3.jpg','assets/4.jpg']

const changeImage = () => {
    if(main.style.backgroundImage == "url(assets/1.jpg)"){
        main.style.backgroundImage = "url(assets/2.jpg)"
    }
    else if(main.style.backgroundImage == "url(assets/2.jpg)"){
        main.style.backgroundImage = "url(assets/3.jpg)"
    }
    else if(main.style.backgroundImage == "url(assets/3.jpg)"){
        main.style.backgroundImage = "url(assets/4.jpg)"
    }
    else(main.style.backgroundImage = "url(assets/1.jpg)")
}

setInterval(changeImage, 1000)

// setInterval(function(){
//     change()
//     let random = Math.floor(Math.random() * 4)
// },1000)