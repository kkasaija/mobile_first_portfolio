/* eslint-disable  */
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
    errorMessage.style.color = 'yellow';
  }
});

//local storage code block. Preserve data
const inputFields = document.querySelectorAll('input');
inputFields.forEach((input) => {
  input.addEventListener('change', (event) => {
    let formData = JSON.parse(localStorage.getItem('formData'));
    if (!formData) {
      formData = { name: '', email: '', message: '' };
    }
    formData[event.target.name] = event.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

const textArea = document.getElementById('contact-message');
textArea.addEventListener('change', (event) => {
  let formData = JSON.parse(localStorage.getItem('formData'));
  if (!formData) {
    formData = { name: '', email: '', message: '' };
  }
  formData.message = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

function retrieveFormData() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    document.getElementById('email').value = formData.email;
    document.getElementById('name').value = formData.name;
    document.getElementById('contact-message').value = formData.message;
  }
}

retrieveFormData();
