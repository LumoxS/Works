const element = document.getElementById('RadioSelect');
const choices = new Choices(element, {
  searchEnabled: false,
  silent: false,
  itemSelectText: '',
  position: 'bottom',
  shouldSort: false
});

function ChangeSelect() {
  document.querySelectorAll('.choices__item--choice').forEach(function (element) {
    element.style.display = 'block';
  });

  let CurrentSelectData = document.querySelector('.choices__item--selectable').getAttribute('data-value');
  let SelectedNotVisible = document.querySelector('.choices__item--choice[data-value="' + CurrentSelectData + '"]');
  SelectedNotVisible.style.display = 'none';
  SelectedNotVisible.setAttribute('tabindex', 0);

  let CurrentSelectId = SelectedNotVisible.getAttribute('data-id');
  let LastElement = 0;

  const ChoicesArray = Array.from(document.querySelectorAll('.choices__item--choice'));
  ChoicesArray.forEach(function (element) {
    element.classList.remove('choices__item--not-up-border');
    LastElement = LastElement + 1;
  })

  if (Number(CurrentSelectId) == 1) {
    document.querySelector('.choices__item--choice[data-id="' + 2 + '"]').classList.add('choices__item--not-up-border');
    document.querySelector('.choices__item--choice[data-id="' + String(LastElement) + '"]').classList.add('choices__item--border-last');
  }

  if (Number(CurrentSelectId) > 1) {
    document.querySelector('.choices__item--choice[data-id="' + 1 + '"]').classList.add('choices__item--not-up-border');
    document.querySelector('.choices__item--choice[data-id="' + String(LastElement) + '"]').classList.add('choices__item--border-last');
  }

  if (Number(CurrentSelectId) == LastElement) {
    document.querySelector('.choices__item--choice[data-id="' + 1 + '"]').classList.add('choices__item--not-up-border');
    document.querySelector('.choices__item--choice[data-id="' + String(LastElement - 1) + '"]').classList.add('choices__item--border-last');
  }

}

ChangeSelect();

document.getElementById('RadioSelect').addEventListener('change', function (event) {
  ChangeSelect();
  document.querySelectorAll('.radio__tab-item').forEach(function (element) {
    element.classList.remove('radio__tab-item--active');
  })
  document.querySelectorAll(`[data-target="${this.value}"]`).forEach(function (element) {
    element.classList.add('radio__tab-item--active');
  })
})

