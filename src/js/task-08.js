const formRef = document.querySelector('.login-form');

const handelSubmit = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    alert('Заполните все поля для отправки формы!');
    return;
  }
  const userData = {
    email: email.value,
    password: password.value,
  };
  console.log(userData);
  event.currentTarget.reset();
};

formRef.addEventListener('submit', handelSubmit);
