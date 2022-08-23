console.log ("hej")

let button = document.querySelector(".button")
let zdjecie = document.querySelector(".photo")

button.addEventListener("click", () => {
    zdjecie.requestFullscreen ();
})

let button1 = document.querySelector(".button--background");
let changeName = document.querySelector(".changeName");
let body = document.querySelector(".body");

button1.addEventListener("click", () => {
    body.classList.toggle("bodydark");
    if(body.classList.contains("bodydark")) {
        changeName.innerText = "jasny";
    } else {
        changeName.innerText = "ciemny";
    }
});