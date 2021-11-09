let main = document.querySelector('main')
let images = ['assets/1.jpg','assets/2.jpg','assets/3.jpg','assets/4.jpg']

setInterval(function(){
    let random = Math.floor(Math.random() * 4)
    main.style.backgroundImage = "url(assets/2.jpg)"
    main.style.backgroundImage = "url(assets/3.jpg)"

},1000)