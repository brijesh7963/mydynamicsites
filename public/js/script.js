const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

var mybgimg=document.getElementById('mybgimg');
var col=["../images/bg1.jpg","../images/bg2.jpg","../images/bg3.jpg","../images/bg4.jpg","../images/bg5.jpg","../images/b1.jpg","../images/b2.jpg","../images/b3.jpg","../images/b4.jpg","../images/b5.jpg","../images/b6.jpg","../images/b7.jpg"];

function fun(){
    return col[Math.floor(Math.random()*12)];
}
setInterval(function(){
     mybgimg.style.backgroundImage="url("+fun()+")";
},4000);

/* ===========================================
   portfolio Section Start
======================================= */


const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  if (!p_btn_clicked.classList.contains("p-btn")) return;

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  // to find the number in data attr
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-acitve"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-acitve")
  );
});


// scrooll to top button
const heroSection=document.querySelector(".section-hero");

const footerElem = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);

//scrolling function to top from bottom
const scrollTop=()=>{
  heroSection.scrollIntoView({behavior:"smooth"});
};
scroollElement.addEventListener("click",scrollTop);


