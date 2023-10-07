let AccordionGuest = new Accordion('.guests__accordion', {
  duration: 400,
  onClose: function (currentElement) {
    GuestCardNull();
    document.getElementById('guest-null').classList.add('guest__card--active');
    document.getElementById('guest-null').classList.remove('guest__card--notactive');
  }
});
AccordionGuest.open(0);

let FocusGuest = document.querySelector('.peoples__item-name[data-nameguest-search="' + 'Guest-OMartinova' + '"]');
FocusGuest.focus();

function GuestCardNull() {
  document.querySelectorAll('.guest__card').forEach(function (e) {
    e.classList.remove('guest__card--active');
    e.classList.add('guest__card--notactive');
  })
}

document.querySelectorAll('.peoples__item-name').forEach(function (e) {
  e.addEventListener('click', function () {
    let CurrentGuest = e.getAttribute('data-nameguest-search');
    let CardCurrentGuest = document.querySelector('.guest__card[data-nameguest-path="' + CurrentGuest + '"]');
    GuestCardNull();
    if (CardCurrentGuest === null) {
      document.getElementById('guest-null').classList.add('guest__card--active');
      document.getElementById('guest-null').classList.remove('guest__card--notactive');
    }
    else {
      CardCurrentGuest.classList.remove('guest__card--notactive');
      CardCurrentGuest.classList.add('guest__card--active');
    }
  })
});