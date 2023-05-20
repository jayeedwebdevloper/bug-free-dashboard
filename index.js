document.getElementById('menubtn').addEventListener('click', function () {
    let menu = document.getElementsByClassName('menubar');
    for (let i = 0; i < menu.length; i++) {
        menu[i].style.display = 'block';

    }
});
document.getElementById('login').addEventListener('click', function () {
    let divLog = document.getElementsByClassName('login');
    for (let i = 0; i < divLog.length; i++) {
        divLog[i].style.display = 'none';
    }
});
let loginBtn = document.getElementById('login');
if (loginBtn.hasAttribute('disabled')) {
    loginBtn.style.opacity = '0.5';
    loginBtn.style.cursor = 'not-allowed';
    loginBtn.style.background = 'rgb(0, 115, 255)';
};



password.addEventListener('keyup', function () {
    let mail = document.getElementById('email');
    let password = document.getElementById('password');
    let email = mail.value;
    let pass = password.value;
    let loginBtn = document.getElementById('login');
    if (email === 'admin@admin.com' && (pass === '12345678' || pass === 12345678)) {
        loginBtn.removeAttribute('disabled');
        loginBtn.style.opacity = '1';
        loginBtn.style.cursor = 'pointer';
        loginBtn.style.background = 'rgb(0, 47, 255)';
    } else {
        loginBtn.setAttribute('disabled', true);
        loginBtn.style.opacity = '0.5';
        loginBtn.style.cursor = 'not-allowed';
        loginBtn.style.background = 'rgb(0, 115, 255)';
    }
});

function deposit(amount) {
    let deposit = document.getElementById(amount);
    let newDeposit = Number(deposit.value);
    let deAmount = document.getElementById('depo');
    let bAmount = document.getElementById('bal');
    let newDAmount = parseFloat(deAmount.innerText);
    let newBAmount = parseFloat(bAmount.innerText);
    let newD = newDeposit + newDAmount;
    let newB = newDeposit + newBAmount;
    deAmount.innerText = newD;
    bAmount.innerText = newB;
    deposit.value = '';

}
function withdraw(amount) {
    let withdraw = document.getElementById(amount);
    let newWithdraw = Number(withdraw.value);
    let wiAmount = document.getElementById('with');
    let bAmount = document.getElementById('bal');
    let newWAmount = parseFloat(wiAmount.innerText);
    let newBAmount = parseFloat(bAmount.innerText);
    let newW = newWithdraw + newWAmount;
    let newB = newBAmount - newWithdraw;
    wiAmount.innerText = newW;
    bAmount.innerText = newB;
    withdraw.value = '';

}
document.getElementById('depoBtn').addEventListener('click', function () {
    deposit('depositInput');
})

document.getElementById('withBtn').addEventListener('click', function () {
    withdraw('withdrawInput');
});
document.getElementById('withdrawInput').addEventListener('keyup', function () {
    let bal = document.getElementById('bal').innerText;
    let balance = Number(bal);
    let withd = document.getElementById('withdrawInput').value;
    let withdraw = Number(withd);
    let btn = document.getElementById('withBtn');
    if (balance < withdraw) {
        btn.setAttribute('disabled', true);
        document.getElementById('balence').style.border = '1px solid #db3b09';
        document.getElementById('balence').style.color = '#db3b09';
        alert('Your balance is not enough to withdraw');
    } else {
        btn.removeAttribute('disabled');
        document.getElementById('balence').style.border = 'none';
        document.getElementById('balence').style.color = '#000';
    }
})


