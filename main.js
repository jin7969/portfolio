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
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// navbar toggle button open
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  console.log(1);
  navbarMenu.classList.toggle('open');
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
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});


// arrow button
arrow.addEventListener('click', () => {
  scrollIntoView('#home');
});

// projects
const workBtn = document.querySelector('.work__categories');
const projectCon = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtn.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  const active = document.querySelector('.category__btn.selected');
  if (active != null) {
    active.classList.remove('selected');
  }
  e.target.classList.add('selected');

  projectCon.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectCon.classList.remove('anim-out');
  }, 300);
});
