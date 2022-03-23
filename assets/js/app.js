const menuBtn = document.querySelector('.menu-btn');
const headerMenu = document.querySelector('.header-nav');
const menuItems = [...document.querySelectorAll('.menu-header__item')];
const subMenus = [...document.querySelectorAll('.submenu-header-nav')];
const arrows = [...document.querySelectorAll('.arrow')];

let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    headerMenu.classList.add('open');
    menuBtn.src = "./assets/images/icon-close.svg";
    showMenu = true;
  } else {
    headerMenu.classList.remove('open');
    menuBtn.src = "./assets/images/icon-hamburger.svg";
    showMenu = false;
  }
}

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', () =>{
    subMenus[i].classList.toggle('open');
    arrows[i].classList.toggle('arrow-rotate');
  });
}

menuBtn.addEventListener('click', toggleMenu);