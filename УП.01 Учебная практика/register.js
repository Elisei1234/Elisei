document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var password = document.getElementById("password").value;
      var repeatPassword = document.getElementById('repeatPassword').value;
      if (password.length < 7) {
        alert('Пароль должен содержать не менее 7 символов');
      }
      else if (password != repeatPassword) {
        alert('Пароли не совпадают');
      } 
      else if (!/[0-9]/.test(password)) {
          alert("Пароль должен содержать хотя бы 1 цифру");
        }
      else if(!/[*!$]/.test(password)){
          alert("Пароль должен содержать хотя бы один из символов: !, *, $")
        }
      else {
        window.location.href = 'login.html';
      }
    });
