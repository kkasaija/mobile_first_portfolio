const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMessage = document.getElementById('error');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value.toLowerCase() === email.value) {
    form.submit();
    errorMessage.style.visibility = 'hidden';
  } else {
    errorMessage.innerHTML = 'email address must be lower case';
    errorMessage.style.visibility = 'visible';
    errorMessage.style.color = 'green';
  }
});
