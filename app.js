let open = document.querySelector(".open");
let close = document.querySelector(".close");
let navLink = document.querySelector(".navLink");

open.addEventListener("click", ()=>{
    console.log(navLink)
    navLink.style.left = 0;
    open.style.display = "none";
    close.style.opacity = 1;

});
close.addEventListener("click", ()=>{
    console.log(navLink)
    navLink.style.left = -100 + "%";
    open.style.display = "block";
    close.style.opacity = 0;

});