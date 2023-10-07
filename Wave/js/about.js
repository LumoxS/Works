const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

function ValidFormReview() {
  const validation = new JustValidate('#formreview');
  validation
    .addField('#whatsay', [
      {
        rule: 'required',
        errorMessage: "Ошибка"
      },
      {
        rule: 'minLength',
        value: 10,
        errorMessage: "Минимальное значение 10 символа"
      },
      {
        rule: 'maxLength',
        value: 320,
        errorMessage: "Вы ввели больше чем положено"
      }
    ])
    .addField('#namereview', [
      {
        rule: 'required',
        errorMessage: "Ошибка"
      },
      {
        rule: 'minLength',
        value: 5,
        errorMessage: "Минимальное значение 5 символов"
      },
      {
        rule: 'maxLength',
        value: 20,
        errorMessage: "Вы ввели больше чем положено"
      },
    ])

    .addField('#emailreview', [
      {
        rule: 'required',
        errorMessage: "Ошибка"
      },
      {
        rule: 'minLength',
        value: 5,
        errorMessage: "Минимальное значение 5 символов"
      },
      {
        rule: 'maxLength',
        value: 50,
        errorMessage: "Вы ввели больше чем положено"
      },
      {
        rule: 'email',
        errorMessage: "Не корректно введена почта"
      },
    ])

    .onSuccess(function () {
      validation.form.submit();
    })

    .onFail(function () {
    })
}

ValidFormReview();