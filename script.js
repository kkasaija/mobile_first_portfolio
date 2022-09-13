const mobileNav = document.querySelector('.mobile-nav');
const body = document.getElementsByTagName('body')[0];
const hamburgerclose = document.getElementById('close-icon');
const hamburgeropen = document.getElementById('menu-icon');
const hamburgerListItem = document.getElementsByClassName('mobile-nav-item');
function openMenu() {
  mobileNav.style.visibility = 'visible';
  body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileNav.style.visibility = 'hidden';
  body.style.overflow = 'auto';
}
hamburgerclose.addEventListener('click', closeMenu);
hamburgeropen.addEventListener('click', openMenu);
for (let i = 0; i <= hamburgerListItem.length; i + 1) {
  hamburgerListItem[i].addEventListener('click', closeMenu);
}
