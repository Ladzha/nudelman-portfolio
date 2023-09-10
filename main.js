/* ===================== MENU SHOW Y HIDDEN ===================== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

/* ====== MENU SHOW  ====== */
/*Validate if constant exist*/
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu')
  })
}

/* ====== HIDE SHOW  ====== */
/*Validate if constant exist*/
if(navClose){
  navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
  })
}

/* ===================== REMOVE MENU MOBILE ===================== */

// Select all elements with class .nav-link
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

//When we click on each nav_link, we remove the show-menu class
navLink.forEach(element => element.addEventListener('click', linkAction))

/* ===================== QUALIFICATION TABS ===================== */
const tabs=document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', ()=>{
    const target = document.querySelector(tab.dataset.target);

  tabContents.forEach((tabContent)=>{
    tabContent.classList.remove('qualification-active')
  });

  target.classList.add('qualification-active')

  tabs.forEach(tab=>{
    tab.classList.remove('qualification-active')
  })

  tab.classList.add('qualification-active')

})

})


/* =================== PORTFOLIO SWIPER =================== */

let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  mousewheel: true,
  keyboard: true,
});

/* ===================== ACCORDION SKILL ===================== */




/* ===================== SEr TABS ===================== */
