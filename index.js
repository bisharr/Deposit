//imports and config firebase

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDmYWSGucyB9GU44hXYXkkco8Um2La9vdw',
  authDomain: 'abc-bank-c1fab.firebaseapp.com',
  projectId: 'abc-bank-c1fab',
  storageBucket: 'abc-bank-c1fab.appspot.com',
  messagingSenderId: '9706879880',
  appId: '1:9706879880:web:21164ac0c06c780c60583d',
};
//WINDOW*************//
window.onload = function () {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  const dbref = ref(db);

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
  console.log('helo');

  var AccNoPat = '^[0-9]{6}$';
  var accPinPat = '^[0-9]{4}$';

  //Login validation...
  function loginValidtion() {
    var LAccNo = document.getElementById('lAccNo').value;
    var LPinNo = document.getElementById('lAccPin').value;

    if (LAccNo.match(AccNoPat) && LPinNo.match(accPinPat)) {
      alert('Welcome to your account');
      portal(LAccNo, LPinNo);
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
      set(ref(db, 'accNo ' + rAccNo + '/accPin' + rAccPin + '/accDetails'), {
        name: rAccName,
        avalBal: 0,
      })
        .then(() => {
          alert('account registered successfully');
        })
        .catch((error) => {
          alert('Registered Failed\n' + error);
        });
      set(ref(db, 'accNo ' + rAccNo + '/received'), {
        receivedAmt: 0,
      })
        .then(() => {
          console.log('received amt updated');
        })
        .catch((error) => {
          alert('received updation Failed\n' + error);
        });
    } else {
      alert('Please enter Valid details');
    }
  }

  //Protal**********
  function portal(accNo, accPin) {
    document.getElementById('register-portal').style.display = 'none';
    document.getElementById('login-portal').style.display = 'none';
    document.getElementById('portal').style.display = 'inline-block';
  }
};
