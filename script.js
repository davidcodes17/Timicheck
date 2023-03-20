const app  = document.querySelector(".app");
const hamburger = document.querySelector(".hams");
const nav = document.querySelector(".nav");
const x = document.querySelector(".x");
const left_btn = document.querySelector(".let");
const slide = document.querySelector(".slide");
const right_btn = document.querySelector(".riht");
let times = 0;


const images = [
    "olobe.png",
    "Alheri.png",
    "resumemain.png",
    "ad.png"
];


left_btn.addEventListener("click",()=>{
    if (times>images.length-1 && times<images.length) {
        times = 0;
    }
    else{
        times = images.length-1;
    slide.setAttribute("src",images[times]);
    times++;
    }
})

right_btn.addEventListener("click",()=>{
    if (times>images.length-1 && times<images.length) {
        times = 0;
    }
    else{
        times = images.length-1;
    slide.setAttribute("src",images[times]);
    times++;
    }
})
hamburger.addEventListener("click",()=>{
    nav.classList.add("active");
    hamburger.style.display = "none";
    x.style.display = "block";
});
x.addEventListener("click",()=>{
    nav.classList.remove("active");
    hamburger.style.display = "block";
    x.style.display = "none";
});




















var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Front - End Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Backend - End Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Data Scientist')
    .pauseFor(2500)
    .start();