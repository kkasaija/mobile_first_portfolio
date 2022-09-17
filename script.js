const mobileNav = document.querySelector('.mobile-nav');
const body = document.getElementsByTagName('body')[0];
const hamburgerclose = document.getElementById('close-icon');
const hamburgeropen = document.getElementById('menu-icon');
const hamburgerListItem = document.querySelectorAll('.mobile-nav-item');
function openMenu() {
  mobileNav.style.visibility = "'visible'";
  body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileNav.style.visibility = 'hidden';
  body.style.overflow = 'auto';
}
hamburgerclose.addEventListener('click', closeMenu);
hamburgeropen.addEventListener('click', openMenu);
hamburgerListItem.forEach((element) => {
  element.addEventListener('click', closeMenu);
});
