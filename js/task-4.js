const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;

  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;
  const emailTrim = emailInput.value.trim();
  const passwordTrim = passwordInput.value.trim();

  if (emailTrim === '' || passwordTrim === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formResult = {
    email: emailTrim,
    password: passwordTrim,
  };
  console.log(formResult);
  form.reset();
}
