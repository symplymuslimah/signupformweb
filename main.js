document.addEventListener('DOMContentLoaded', function () {
    const formInput = document.getElementById('formInput');
    const Username = document.getElementById('Username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPassword = document.getElementById('Cpassword');
    const Btn = document.getElementById('butn');
  
    const Errormessage1 = document.getElementById('errormessage1');
    const Errormessage2 = document.getElementById('errormessage2');
    const Errormessage3 = document.getElementById('errormessage3');
    const Errormessage4 = document.getElementById('errormessage4');
    
  
    formInput.addEventListener('submit', function (e) {
      const User = Username.value;
      const Email = emailInput.value;
      const Pword = passwordInput.value;
      const Cpword = confirmPassword.value;
  
      let isValid = true;
  
      if (!/[a-zA-Z]/.test(User) || !/\d/.test(User)) {
        Errormessage1.textContent = 'username must contain numbers and letters';
        isValid = false;
      }else{
        Errormessage1.textContent = '';
      }
      if (!Email.includes('@') || !Email.includes('.com')) {
          Errormessage2.textContent = 'Invalid email address';
      }else{
        Errormessage2.textContent = '';
      }
  
      if (!/\d/.test(Pword)) {
        Errormessage3.textContent = 'Incorrect password';
        isValid = false;
      }else{
        Errormessage3.textContent = '';
      }
  
      if (!/\d/.test(Cpword)) {
        
        Errormessage4.textContent = 'Reconfirm password';
        isValid = false;
      }else{
        Errormessage4.textContent = '';
      }
  
      if (Pword !== Cpword) {
        Errormessage4.textContent = 'Reconfirm password';
        isValid = false;
      }else{
        Errormessage4.textContent = '';
      }
    
      if(!isValid){
        e.preventDefault();
     }
    });
  });
  