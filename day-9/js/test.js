//? Variable 
const text = document.getElementById("main_text")
const upper = document.getElementById("big")
const lower = document.getElementById("small")
const summery = document.getElementById("summry")
const chars = document.getElementById("char")
const clear = document.getElementById("clear")
const preview = document.getElementById("preview")
const summery_container = document.getElementById("summery_container")
const time = document.getElementById("time")
const copy = document.getElementById("copy")
const navbar = document.getElementById("navbar")
const theme_btn = document.getElementById("theme_btn")
const all = document.getElementById("all")
let words = document.getElementById("words")
let theme = "light"

//?some things

summery_container.style.visibility = "hidden"



// ? Functions
upper.addEventListener("click",function () {
    new_text = text.value
    text.value = new_text.toUpperCase()
})

lower.addEventListener("click",function () {
    new_text = text.value
    text.value = new_text.toLowerCase()
})

summery.addEventListener("click",function () {
    let new_text = text.value
    let word_arr = new_text.split(" ");
    words.innerHTML = word_arr.length
    let a = new_text.split("")
    chars.innerHTML = a.length
    preview.innerHTML = new_text
    summery_container.style.visibility = "visible"
    time.innerHTML = word_arr.length * 0.008
})
clear.addEventListener("click",function () {
    text.value = " "
    
})

copy.addEventListener("click",function () {
    console.log(text.value)
    let new_text = text.value

    let a = new_text.split("")
    let r = a.length
  /* Select the text field */
     text.select();
     text.setSelectionRange(0, r); /* For mobile devices */

//   /* Copy the text inside the text field */
     navigator.clipboard.writeText(text.value);
     alert("Text Is Copy To Your Clipboard")
})


function clicked() {
    const ask = document.getElementById("ask")
    if (theme == "light") {
        navbar.classList.replace("border-dark","border-light")
        navbar.classList.replace("navbar-light","navbar-dark")
        navbar.classList.replace("bg-light","bg-dark")
        theme_btn.classList.replace("border-dark","border-light")
        upper.classList.replace("btn-primary","btn-dark")
        lower.classList.replace("btn-primary","btn-dark")
        summery.classList.replace("btn-primary","btn-dark")
        clear.classList.replace("btn-primary","btn-dark")
        copy.classList.replace("btn-primary","btn-dark")
        all.classList.add("bg-dark")
        summery_container.style.color = "#fff"
        ask.style.color = "#fff"
        theme = "dark"
    }
    
    else {
        navbar.classList.replace("border-light","border-dark")
        navbar.classList.replace("navbar-dark","navbar-light")
        navbar.classList.replace("bg-dark","bg-light")
        theme_btn.classList.replace("border-light","border-dark")
        upper.classList.replace("btn-dark","btn-primary")
        lower.classList.replace("btn-dark","btn-primary")
        summery.classList.replace("btn-dark","btn-primary")
        clear.classList.replace("btn-dark","btn-primary")
        copy.classList.replace("btn-dark","btn-primary")
        all.classList.remove("bg-dark")
        all.classList.add("bg-light")
        summery_container.style.color = "#000"
        ask.style.color = "#000"
        theme = "light"
   }
}