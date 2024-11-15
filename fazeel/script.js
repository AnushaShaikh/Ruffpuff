var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: false, 
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  on: {
      init: function () {
          console.log('Swiper initialized');
      },
      slideChange: function () {
          console.log('Slide changed');
      },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  preloadImages: true, 
  observer: true, 
  observeParents: true
});


 