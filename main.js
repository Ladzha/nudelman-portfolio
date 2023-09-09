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

const navLink = document.querySelectorAll('.nav-link')
function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
  //When we click on each nav_link, we remove the show-menu class
  navLink.forEach(element => element.addEventListener('click', linkAction))
}


/* ===================== ACCORDION SKILL ===================== */


/* ===================== QUALIFICATION TABS ===================== */


/* ===================== SEr TABS ===================== */
