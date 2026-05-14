// =========================
// LOADER
// =========================
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if(loader){
    setTimeout(() => {
      loader.classList.add("hide");
    }, 1200);
  }
});

// =========================
// TYPING EFFECT
// =========================
const typing = document.querySelector(".typing");

if(typing){

const words = [
  "Modern Websites",
  "Business Sites",
  "Landing Pages",
  "Full Stack Apps"
];

let i = 0;
let j = 0;
let isDeleting = false;

function type(){
  let current = words[i];

  typing.textContent = current.substring(0, j);

  if(!isDeleting){
    j++;
  } else {
    j--;
  }

  let speed = isDeleting ? 60 : 120;

  if(j === current.length){
    isDeleting = true;
    speed = 900;
  }

  if(j === 0 && isDeleting){
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, speed);
}

type();
}

// =========================
// SCROLL REVEAL (VIP SMOOTH)
// =========================
const elements = document.querySelectorAll(".card, .skill, .project-card");

function reveal(){
  elements.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if(top < windowHeight - 80){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

// =========================
// CURSOR SMOOTH GLOW (OPTIONAL)
// =========================
const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e)=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});