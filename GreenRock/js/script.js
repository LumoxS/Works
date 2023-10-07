// CLICK btn
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
// CLICK btn


// BURGER
let burger = document.querySelector('.navbar__burger');
let menu = document.querySelector('.navbar-collapse');
let menulinks = document.querySelectorAll('.nav-link');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
});


menulinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('show');


  });
});




function DataString() {
  let currentDate = new Date();
  let futureDate = new Date();
  let CurrentMonthName = currentDate.toLocaleString('default', { month: 'long' });
  let CurrentYearName = currentDate.getFullYear();
  let CurrentDayName = currentDate.getDate();
  futureDate.setDate(currentDate.getDate() + 7);
  let FutureMonthName = futureDate.toLocaleString('default', { month: 'long' });
  let FutureYearName = futureDate.getFullYear();
  let FutureDayName = futureDate.getDate();

  document.getElementById('checkin-day').textContent = CurrentDayName;
  document.getElementById('checkin-month').textContent = CurrentMonthName;
  document.getElementById('checkin-year').textContent = CurrentYearName;

  document.getElementById('checkout-day').textContent = FutureDayName;
  document.getElementById('checkout-month').textContent = FutureMonthName;
  document.getElementById('checkout-year').textContent = FutureYearName;
}

DataString();


const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  slideToClickedSlide: true,
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

try {
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("MyMap", {
      center: [55.76, 37.56],
      zoom: 17
    });
    let adress = 'Батуми, ш. Андрея Первозванного, 103';
    var myGeocoder = ymaps.geocode(adress);
    myGeocoder.then(
      function (res) {
        coords = res.geoObjects.get(0).geometry.getCoordinates();
        // переходим по координатам
        myMap.panTo(coords, {
          flying: 1
        });

        var placeMark = new ymaps.Placemark(coords, {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/Location.svg',
          iconImageSize: [48, 48],
          iconImageOffset: [-3, -42],
          balloonContent: adress
        });
        myMap.geoObjects.add(placeMark);
      },
      function (err) {
        alert('Ошибка поиска!!');
      }
    );
    return false;
  }
}
catch {
  alert("Не подключаются Яндекс карты! Возможно нет интернета");
}