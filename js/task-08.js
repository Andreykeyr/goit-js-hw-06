const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', (e) => {
   const inputFields = loginForm.querySelectorAll("input");
   if (inputFields[0].value.length === 0 || inputFields[1].value.length === 0) {
      alert('ВСЕ ПОЛЯ ДОЛЖНЫ БЫТЬ ЗАПОЛНЕНЫ НУЖНО ПОСТРОИТЬ ЗИКУРАТ');
   }
   e.preventDefault();
});