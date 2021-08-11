'use strict';

// navbar 상단고정
const navbar = document.querySelector('#navbar');
const arrow = document.querySelector('.arrow-up');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
    arrow.classList.remove('hidden')
  } else {
    navbar.classList.remove('navbar--dark');
    arrow.classList.add('hidden');
  }
});

// navbar menu로 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// contact button 이동
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener('click', (event) => {
  scrollIntoView('#contact')
});

// scroll view
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// 홈화면 투명도 조절
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
console.log(homeHeight);
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});


// arrow button
arrow.addEventListener('click', () => {
  scrollIntoView('#home');
});