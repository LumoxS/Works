let BtnPulse = document.getElementsByClassName('btn'),
  forEach = Array.prototype.forEach;

forEach.call(BtnPulse, function (b) {
  b.addEventListener('click', addElement);
  console.log('1');
});

function addElement(e) {
  let addDiv = document.createElement('div');
  let mValue = Math.max(this.clientWidth, this.clientHeight);
  let sDiv = addDiv.style;
  let px = 'px';
  let rect = this.getBoundingClientRect();
  sDiv.width = sDiv.height = mValue + px;
  sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
  sDiv.top = e.clientY - rect.top - (mValue / 2) + px;
  addDiv.classList.add('pulse');
  this.appendChild(addDiv);
  setTimeout(() => addDiv.remove(), 500);
}


document.getElementById('Login-Btn').addEventListener('click', function () {
  let Modal = document.querySelector('.login__modal-block[data-modal=' + this.dataset.modal + ']');
  Modal.classList.add('modal--show');
  document.querySelector('.overlay').classList.add('modal--show');
})

document.getElementById('Login__modal-close-btn').addEventListener('click', function () {
  this.parentElement.classList.remove('modal--show');
  document.querySelector('.overlay').classList.remove('modal--show');
})

function ValidFormLog() {
  const validation = new JustValidate('#formlog');
  validation
    .addField('#login-input', [
      {
        rule: 'required',
        errorMessage: "Вы не ввели логин"
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: "Минимальное значение 3 символа"
      },
      {
        rule: 'maxLength',
        value: 20,
        errorMessage: "Вы ввели больше чем положено"
      }
    ])
    .addField('#password-input', [
      {
        rule: 'required',
        errorMessage: "Пароль не может быть пустым"
      },
      {
        rule: 'minLength',
        value: 8,
        errorMessage: "Минимальное значение 8 символов"
      },
      {
        rule: 'maxLength',
        value: 20,
        errorMessage: "Вы ввели больше чем положено"
      },
      {
        rule: 'password',
        errorMessage: "Пароль должен содержать буквы и цыфры"
      }
    ])

    .onSuccess(function () {
      validation.form.submit();
    })

    .onFail(function () {
    })
}
ValidFormLog();

function show_hide_password(target) {
  let input = document.getElementById('password-input');
  if (input.getAttribute('type') == 'password') {
    target.classList.add('view');
    input.setAttribute('type', 'text');
  } else {
    target.classList.remove('view');
    input.setAttribute('type', 'password');
  }
  return false;
}

document.getElementById('HeaderSearchOpen').addEventListener('click', function () {
  document.getElementById('FormSearch').classList.add('formsearch__input--active');
})

document.getElementById('FormSearchBtn').addEventListener('click', function () {
  document.getElementById('FormSearch').classList.remove('formsearch__input--active');
})

document.addEventListener('click', function (event) {
  if ((!document.getElementById('FormsearchInput').contains(event.target)) &&
    (!document.getElementById('HeaderSearchOpen').contains(event.target.parentElement))) {
    document.getElementById('FormSearch').classList.remove('formsearch__input--active');
  }
})


let BroadcastNow = new Audio();
BroadcastNow.src = './Musics/broadcast_now.mp3';
BroadcastNow.pause();
let BroadcastEarlier = new Audio();
BroadcastEarlier.src = './Musics/broadcast_Earlier.mp3';
BroadcastEarlier.pause();

document.getElementById('HeroBtn').addEventListener('click', function(){
  let HeroNow = new Audio();
  HeroNow.src = './Musics/hero.mp3';
  HeroNow.play();
});



function BroadcastPlayEarlier() {
  this.children[0].children[0].classList.toggle('triangle-none');
  this.children[0].children[1].classList.toggle('triangle-block');
  if (BroadcastEarlier.paused == true) {
    BroadcastEarlier.play();
  }
  else {
    BroadcastEarlier.pause();
  }
  BroadcastNow.pause();
  document.getElementById('BroadcastPlayNow').children[0].children[0].classList.remove('triangle-none');
  document.getElementById('BroadcastPlayNow').children[0].children[1].classList.remove('triangle-block');
}

function BroadcastPlayNow() {
  this.children[0].children[0].classList.toggle('triangle-none');
  this.children[0].children[1].classList.toggle('triangle-block');
  if (BroadcastNow.paused == true) {
    BroadcastNow.play();
  }
  else {
    BroadcastNow.pause();
  }
  BroadcastEarlier.pause();
  document.getElementById('BroadcastPlayEarlier').children[0].children[0].classList.remove('triangle-none');
  document.getElementById('BroadcastPlayEarlier').children[0].children[1].classList.remove('triangle-block');

}

document.getElementById('BroadcastPlayEarlier').addEventListener('click', BroadcastPlayEarlier);
document.getElementById('BroadcastPlayNow').addEventListener('click', BroadcastPlayNow);


document.getElementById('BurgerBtn').addEventListener('click', function () {
  let UpMenuHeight = document.querySelector('.header__up-menu').offsetHeight;
  document.querySelector('.nav-down').style.top = UpMenuHeight - 50 + 'px';
  document.querySelector('.header__up-menu').classList.toggle('header__up-menu--active');
  document.querySelector('.nav-down').classList.toggle('nav-down--active');
  this.classList.toggle('burger--active');
});


document.querySelector('.header__broadcast-caption').addEventListener('click', function () {
  document.querySelector('.broadcast').classList.toggle('broadcast--active');
  document.querySelector('.broadcast-circle').classList.toggle('broadcast-circle--active');
})




let GanreLabels = document.querySelectorAll('.genre__label');
GanreLabels.forEach(function(){
})


window.addEventListener('resize',function(){
  const width= document.body.clientWidth;
  if (width <= 576) {
    GanreLabels.forEach(function(){
    })
  }
  else {
    GanreLabels.forEach(function(){
    })
  }
});

if (document.body.offsetWidth <= 576) {
  GanreLabels.forEach(function(element){
    element.classList.add('btn');
  })
}