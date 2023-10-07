let BtnPulse = document.getElementsByClassName('btn'),
  forEach = Array.prototype.forEach;

forEach.call(BtnPulse, function (b) {
  b.addEventListener('click', addElement);
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

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

function yago() {
location.href='https://go.yandex/ru_ru/lp/rides/scooter';
}

document.querySelector('.header__login').addEventListener('click', function(){yago()});
document.querySelector('.events__login').addEventListener('click', function(){yago()})
document.querySelector('.community__login').addEventListener('click', function(){yago()})

