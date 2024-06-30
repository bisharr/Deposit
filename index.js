window.onload = function () {
  document.getElementById('swithToReg').onclick = switchToReg;

  document.getElementById('swithToLogIn').onclick = switchToLogIN;
  document.getElementById('login-btn').onclick = loginValidtion;

  function switchToReg() {
    document.getElementById('register-portal').style.display = 'inline-block';
    document.getElementById('login-portal').style.display = 'none';
  }
  function switchToLogIN() {
    document.getElementById('register-portal').style.display = 'none';
    document.getElementById('login-portal').style.display = 'inline-block';
  }

  //..acc no pin pattern...

  var AccNoPat = '^[0-9]{6}$';
  var accPinPat = '^[0-9]{4}$';

  //Login validation...
  function loginValidtion() {
    var LAccNo = document.getElementById('lAccNo').value;
    var LPinNo = document.getElementById('lAccPin').value;

    if (LAccNo.match(AccNoPat) && LPinNo.match(accPinPat)) {
      alert('Welcome');
    } else {
      alert('Please enter Valid details');
    }
  }
};
