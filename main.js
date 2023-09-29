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

/* ====== MENU HIDDEN  ====== */
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

/* ===================== SCROLL SECTION ACTIVE LINK ===================== */

const sections = document.querySelectorAll('section[id]')
function scrollActive(){
  // const scrollY = window.pageYOffset
  const scrollY = window.scrollY

  sections.forEach(current=>{
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
  })
}

window.addEventListener('scroll', scrollActive)

/* ===================== CHANGE BACKGROUND HEADER ===================== */
function scrollHeader(){
  const nav = document.getElementById('header')
  if(this.scrollY >= 200) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


// /* ================== SHOW SCROLL TOP ================== */
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top')
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

/* ================== SHOW SCROLL UP ================== */
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up')
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/* ===================== ACCORDION SKILLS ===================== */

const skillsContent  = document.getElementsByClassName('skills-content')
const skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills(){
  let itemClass = this.parentNode.className
  for(i=0; i<skillsContent.length; i++){
    skillsContent[i].className = 'skills-content skills-close'
  }
  if(itemClass === 'skills-content skills-close'){
    this.parentNode.className = 'skills-content skills-open'
  }
}

skillsHeader.forEach((element)=>{
  element.addEventListener('click', toggleSkills)
})

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
