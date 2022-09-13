const mobileNav = document.querySelector(".mobile-nav");
function openMenu() {
  mobileNav.style.visibility = 'visible';
}
function closeMenu() {
  mobileNav.style.visibility = 'hidden';
  window.setTimeout(() => {
    window.location.reload();
  }, 5000);
}