let boxes = document.querySelectorAll(".box-main");

console.log(boxes);
Array.from(boxes).forEach((e)=> {
    e.classList.add("hide");
})

let footer = document.querySelector("footer");
footer.classList.add("hide");

let nav = document.querySelector("nav");
nav.classList.add("hide");

var loader = document.getElementById("preloader");

window.addEventListener("load" , function () {
    loader.style.display = "none";

    setTimeout(() => {
        Array.from(boxes).forEach((e)=> {
            e.classList.remove("hide");
        })
    
        footer.classList.remove("hide");
        nav.classList.remove("hide");
    }, 8000);


})