const ShowMore = document.querySelector('.podcasts__btn-more');
const PodcastLenght = document.querySelectorAll('.podcasts__item').length;
const PodcastArray = Array.from(document.querySelectorAll('.podcasts__item'));
let items = 8;
let itemsGap = 4;

function itemsSet() {
  if (document.body.offsetWidth <= 630) {
    items = 4;
    itemsGap = 2;
  }
  else {
    items = 8;
    itemsGap = 4;
  }
}
itemsSet();
window.addEventListener('resize', function () {
  itemsSet();
})

const PodcastArrayStart = PodcastArray.slice(0, items);
let Collapse = false;

function PodcastStart() {
  PodcastArray.forEach(function (element) {
    element.style.display = 'none';
  });
  PodcastArrayStart.forEach(function (element) {
    element.style.display = 'flex';
  })
}

ShowMore.addEventListener('click', function () {
  if (Collapse) {
    PodcastStart();
    ShowMore.textContent = 'Ещё подкасты';
    Collapse = false;
  }
  else {
    items = items + itemsGap;
    let PodcastArrayVisible = PodcastArray.slice(0, items);
    PodcastArrayVisible.forEach(function (element) {
      element.style.display = 'flex';
      if (PodcastArrayVisible.length === PodcastLenght) {
        ShowMore.textContent = 'Свернуть';
        Collapse = true;
      }
    })
  }
})


let PodcastMusic = new Audio();
PodcastMusic.src = './Musics/podcast.mp3';
PodcastMusic.pause();
PodcastMusic.onended = function () {
  document.querySelectorAll('.p-card__btn').forEach(function (e) {
    e.children[0].style.display = 'block';
    e.children[1].style.display = 'none';
  })
}

document.querySelectorAll('.p-card__btn').forEach(function (e) {
  e.addEventListener('click', function () {
    if (PodcastMusic.paused) {
      PodcastMusic.play();
      e.children[0].style.display = 'none';
      e.children[1].style.display = 'block';
    } else {
      PodcastMusic.pause();
      e.children[0].style.display = 'block';
      e.children[1].style.display = 'none';
    }
  })
})

document.querySelectorAll('.p-card__view').forEach(function (e) {
  e.addEventListener('click', function () {
    this.children[0].children[0].children[0].classList.toggle('p-card__view-svg--active');
    if (this.children[0].children[0].children[0].classList.contains('p-card__view-svg--active')) {
      this.children[1].textContent = Number(this.children[1].textContent) + 1;
    }
    else {
      this.children[1].textContent = Number(this.children[1].textContent) - 1;
    }
  }) 
})

document.querySelectorAll('.p-card__like').forEach(function (e) {
  e.addEventListener('click', function () {
    this.children[0].children[0].children[0].classList.toggle('p-card__like-svg--active');
    this.children[0].children[0].children[1].classList.toggle('p-card__like-svg--active');
    if (this.children[0].children[0].children[0].classList.contains('p-card__like-svg--active')) {
      this.children[1].textContent = Number(this.children[1].textContent) + 1;
    }
    else {
      this.children[1].textContent = Number(this.children[1].textContent) - 1;
    }
  })
})

document.querySelectorAll('.p-card__share').forEach(function (e) {
  e.addEventListener('click', function () {
    this.children[0].children[0].children[0].classList.toggle('p-card__share-svg--active');
    if (this.children[0].children[0].children[0].classList.contains('p-card__share-svg--active')) {
      this.children[1].textContent = Number(this.children[1].textContent) + 1;
    }
    else {
      this.children[1].textContent = Number(this.children[1].textContent) - 1;
    }
  })

})


