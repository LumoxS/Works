// console.log("Проверка");

// ****** CustomSelect ******

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  silent: false,
  itemSelectText: '',
  // placelder:false,
  // placeholder:'a;kasjlkashl;asdkhj',
  position: 'bottom',
  shouldSort: false
  // searchEnabled: false,
  // placeholder: false,
  // shouldSort: true,
  // shouldSortItems: true
  // resetScrollPosition: true,
  // noChoicesText: ''
  // itemSelectText: ''
  // renderSelectedChoices: 'always'
});


// Управление выостой конейнера - по приколу
var HeightSelectContainerDefault = 50 + "px";
var HeightSelectContainer = document.querySelector('.choices__list--dropdown').offsetHeight + 50 + "px";
// console.log(document.querySelector('.choices__list--dropdown').offsetHeight);

document.querySelector('.choices').addEventListener("click", function () {
  if (document.querySelector('.choices').classList.contains("is-open")) {
    document.querySelector('.select__container').style.height = HeightSelectContainerDefault;
  }
  else {
    document.querySelector('.select__container').style.height = HeightSelectContainer;
  }
})

document.getElementById("MySelect").addEventListener("change", function () { 
  document.querySelector('.select__container').style.height = HeightSelectContainerDefault;
})

// **** YANDEX ******
try {
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("MyMap", {
      center: [55.76, 37.56],
      zoom: 15
    });

    document.getElementById('yandex--click').addEventListener('click', function () {
      let adress = document.getElementById("adress").value;
      //  себе памятка - подключение api - убираем лишнее - после цифр api сразу 1&lang=ru_RU
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
    })
  }
}
catch {
  alert("Не подключаются Яндекс карты! Возможно нет интернета");
}

// InputMask and Validator
let selector = document.getElementById("tel");
let im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

let u = 10;
function ValidForm() {
  const validation = new JustValidate('#form');
  validation
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: "Вы не ввели имя"
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: "Минимальное значение 3 символа"
      },
      {
        rule: 'maxLength',
        value: 50,
        errorMessage: "Вы ввели больше чем положено"
      }
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: "Вы не ввели e-mail"
      },
      {
        rule: 'email',
        errorMessage: 'Не корректный e-mail'
      }
    ])
    .addField('#tel', [
      {
        rule: 'required',
        errorMessage: "Вы не ввели телефон"
      },

      {
        rule: "function",
        // validator: function (name, value1) - хз зачем это. недадумал - убрал. {
        validator: function () {
          const phone = selector.inputmask.unmaskedvalue();
          return phone.length == 10
          // return phone.length === 10 - было так. почитал. решил что и 2-х хватит
        },
        errorMessage: 'Не достаточное количество символов в телефоне',
      }
    ])
    // .onSuccess((event) => {
    //   console.log('Валидация пройдена')
    // })
    .onSuccess(function() {
      // console.log('Валидация пройдена');
      // u = 1;
      validation.form.submit();
})

    .onFail(function () {
      console.log('Валидация  НЕ пройдена');
      // u = 0;
    })
}

document.querySelector('.form__btn').addEventListener('click',async function () {
  ValidForm();
  // document.getElementById('form').submit();
  // console.log("Привет", u);
});

// rotation

var circle = document.getElementById("romb");
    var i = 0;
    function rotation(){

        romb.setAttribute("style","transform :rotate("+i+"deg)");
        if( i == 360){
            i = 0;
        }
        i++;
    }
    setInterval(rotation,40);



// validation.onSuccess(document.getElementById('form').submit());

// ЗАГРУЗКА DOM
// function doSomething() {
//   alert('DOM загружен');
// }
// if (document.readyState === 'loading') {  // Загрузка ещё не закончилась
//   document.addEventListener('DOMContentLoaded', doSomething);
// } else {  // `DOMContentLoaded` Уже сработал
//   doSomething();
//   alert('Ошибка поиска!!');
// }

