
let counter = 0 
let increase = document.querySelector("#increase")
increase.addEventListener("click", domIncrease)

let decrease = document.querySelector("#decrease")
decrease.addEventListener("click", domDecrease)

let clear = document.querySelector("#clear")
clear.addEventListener("click", domClear)

function domIncrease(){
    let view = document.querySelector("#view")
    view.innerHTML = ++counter // ++counter yapmamın sebebi; önce arttırıp sonra işlemesidir.
}

function domDecrease(){
    let view = document.querySelector("#view")
    view.innerHTML = --counter // --counter yapmamın sebebi; önce azaltıp sonra işlemesidir.
}

function domClear(){
    counter = 0
    view.innerHTML = counter
}