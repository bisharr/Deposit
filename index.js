window.onload = function () {
  document.getElementById('swithToReg').onclick = switchToReg;

  document.getElementById('swithToLogIn').onclick = switchToLogIN;
  document.getElementById('login-btn').onclick = loginValidtion;
  document.getElementById('register-btn').onclick = registerValidation;

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
      alert('Welcome to your account');
    } else {
      alert('Please enter Valid details');
    }
  }

  //register validation...

  function registerValidation() {
    var rAccName = document.getElementById('rAccName').value;
    var rAccNo = document.getElementById('rAccNo').value;
    var rAccPin = document.getElementById('rAccPin').value;
    var rConAccPin = document.getElementById('rConAccPin').value;

    if (
      rAccName !== null &&
      rAccNo.match(AccNoPat) &&
      rAccPin.match(accPinPat) &&
      rAccPin == rConAccPin
    ) {
      alert('account registered successfully');
    } else {
      alert('Please enter Valid details');
    }
  }
};
