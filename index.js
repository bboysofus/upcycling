let main = document.querySelector('main')
let h1 = document.querySelector('#title')

let x = 1

const changeImage = () => {

    if(x == 1){
        main.style.backgroundImage = 'url("./assets/to.jpg")'
        x = 2
    }
    else if(x == 2){
        main.style.backgroundImage = 'url("./assets/tre.jpg")'
        x = 3   
    }
    else if(x == 3){
        main.style.backgroundImage = 'url("./assets/fire.jpg")'
        x = 4
    }
    else if(x == 4){
        main.style.backgroundImage = 'url("./assets/en.jpg")'
        x = 1
    }
}

setInterval(changeImage, 5000)

// setInterval(function(){
//     change()
//     let random = Math.floor(Math.random() * 4)
// },1000)