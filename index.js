window.onload = function () {
  document.getElementById('swithToReg').onclick = switchToReg;

  document.getElementById('swithToLogIn').onclick = switchToLogIN;

  function switchToReg() {
    document.getElementById('register-portal').style.display = 'inline-block';
    document.getElementById('login-portal').style.display = 'none';
  }
  function switchToLogIN() {
    document.getElementById('register-portal').style.display = 'none';
    document.getElementById('login-portal').style.display = 'inline-block';
  }
};
