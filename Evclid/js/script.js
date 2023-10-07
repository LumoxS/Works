function SizeResize() {

  if (document.body.offsetWidth <= 1024) {
    document.getElementById("hero__img1").src = "img/hero-pic-1024-1.jpg";
    document.getElementById("hero__img2").src = "img/hero-pic-1024-2.jpg";
    document.getElementById("hero__img3").src = "img/hero-pic-1024-3.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-1024-1.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-1024-2.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-1024-3.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-1024-4.jpg";
    document.getElementById("hero__body").style.width = 800 + "px";
    // console.log("БЛА 1024");
  }

  if ((document.body.offsetWidth <= 880) && (document.body.offsetWidth > 768)) {
    // document.querySelector('.footer__nav').style.display = "none";
    // document.querySelector('.footer').style.WebkitFlexDirection = "column-reverse";
    // document.querySelector('.footer').style.minheight = 792 + "px";
      //  document.querySelector('.footer').style.paddingLeft = 10 + "px";
      //  document.querySelector('.footer').style.paddingRight = 10 + "px";
    // document.querySelector('.input-textarea').style.marginbottom = 35 + "px";
    // document.querySelector('.footer__logo').style.marginbottom = 8 + "px";
    // document.querySelector('.footer__center').style.width = "auto";
    // document.querySelector('.footer__center').style.maxwidth = 570 + "px";
    // document.querySelector('.footer__center').style.paddingright = 29 + "px";
  }

  if (document.body.offsetWidth <= 786) {
    document.getElementById("hero__img1").src = "img/hero-pic-768-1.jpg";
    document.getElementById("hero__img2").src = "img/hero-pic-768-2.jpg";
    document.getElementById("hero__img3").src = "img/hero-pic-768-3.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-768-1.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-768-2.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-768-3.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-768-4.jpg";
    document.getElementById("hero__body").style.width = 618 + "px";
    // console.log("БЛА 480");
  }

  if (document.body.offsetWidth <= 480) {
    document.getElementById("hero__img1").src = "img/hero-pic-320-1.jpg";
    document.getElementById("hero__img2").src = "img/hero-pic-320-2.jpg";
    document.getElementById("hero__img3").src = "img/hero-pic-320-3.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-320-1.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-320-2.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-320-3.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-320-4.jpg";
    document.getElementById("hero__body").style.width = 277 + "px";
    // console.log("БЛА 480");
  }

  if (document.body.offsetWidth > 1024) {
    document.getElementById("hero__img1").src = "img/hero-pic-1920-1.jpg";
    document.getElementById("hero__img2").src = "img/hero-pic-1920-2.jpg";
    document.getElementById("hero__img3").src = "img/hero-pic-1920-3.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-1920-1.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-1920-2.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-1920-3.jpg";
    document.getElementById("work__img-stage1").src = "img/work-pic-1920-4.jpg";
    document.getElementById("hero__body").style.width = 917 + "px";
    // console.log("БЛА 1920");
  }

  if (document.body.offsetWidth > 2600) {
    document.getElementById("hero__body").style.width = 50 + "%";
  }

  if ((document.body.offsetWidth > 768 && document.body.offsetWidth < 900) || (document.body.offsetWidth > 480 && document.body.offsetWidth < 723)) {
    document.getElementById("hero__body").style.width = document.getElementById("hero__container").offsetWidth + "px";
    // console.log(document.getElementById("hero__body").offsetWidth);
  }

  document.getElementById("hero__container").style.height = document.getElementById('hero__body').offsetHeight + "px";
}

SizeResize();

window.addEventListener('resize', function () {
  SizeResize();
})

// SWIPER
const swiper = new Swiper('.swiper', {
  loop: true,
  slideToClickedSlide: true,

  lazy: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});


// SECTION WORK
let WorkItemLink = document.querySelectorAll('.work__item-link');
let WorkTextStep = document.querySelectorAll('.work__text-step');

WorkItemLink.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    WorkItemLink.forEach(function (link) { link.classList.remove('work__item-link--active') });
    e.currentTarget.classList.add('work__item-link--active');

    WorkTextStep.forEach(function (element) { element.classList.remove('work__text-step--active') });
    document.querySelectorAll(`[data-target="${path}"]`).forEach(function (active) { active.classList.add('work__text-step--active') });

  });
});


// ACCORDION section FAQ
new Accordion('.accordion');


// BURGER
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menulinks = menu.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle("header__nav--active");
});

menulinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("header__nav--active");
  });
});


// SEARCH
let search = document.querySelector(".header__search");
let SearchClosed = document.querySelector(".header__search-closed");
let SearchActiv = document.querySelector(".header__search-active")
search.addEventListener("click", function () {
  // search.classList.remove("header__search");
  search.classList.add("header__search--click");
  SearchActiv.classList.add("header__search-active-enabled");
});

SearchClosed.addEventListener("click", function () {
  search.classList.remove("header__search--click");
  // search.classList.add("header__search");
  SearchActiv.classList.remove("header__search-active-enabled");
});


// FAQ ACTIVE Keyboard

// let FaqItem = document.querySelector(".faq__item");
// FaqItem.addEventListener('click', function() {
//   console.log(FaqItem);
// })
