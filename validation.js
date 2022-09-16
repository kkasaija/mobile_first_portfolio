const errorMessage = document.getElementById('#emailVal');
const form = document.querySelector('form');
const email = document.getElementById('#email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value.toLowerCase() === email.value) {
    form.submit();
  } else {
    errorMessage.innerHTML = 'email address must be lower case';
    errorMessage.style.display = 'block';
  }
});

