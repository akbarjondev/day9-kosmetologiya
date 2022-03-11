const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__desktop');
const closeBtn = document.querySelector('.header__close-button');
const curtain = document.querySelector('.curtain');

hamburger.addEventListener('click', () => {
  menu.classList.add('header__desktop--on');
  curtain.classList.add('curtain--on');
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('header__desktop--on');
  curtain.classList.remove('curtain--on');
})
