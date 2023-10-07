document.querySelectorAll('.genre__label').forEach(function (e) {

  e.addEventListener('click', function () {
    document.querySelectorAll('.genre__label').forEach(function (m) {
      m.classList.remove('genre__label--active');
    })
    document.querySelectorAll('.cards__items').forEach(function (e) {
      e.classList.remove('cards--active');
      e.classList.add('cards--notactive');
    })

    try {
      let y = document.querySelector('[data-play-src="' + e.getAttribute('data-play-id') + '"]');
      y.classList.remove('cards--notactive');
      y.classList.add('cards--active');
    }
    catch {
      let y = document.querySelector('[data-play-src="nulls"]');
      y.classList.remove('cards--notactive');
      y.classList.add('cards--active');
    }
  })
});
