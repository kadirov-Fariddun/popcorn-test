$(document).ready(function(){
    const swiper = new Swiper('.popkorn_swiper', {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 1,
      autoplay: {
        delay: 300,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    const swiper_2 = new Swiper('.feeback_swiper', {
      loop: true,
      slidesPerView: 1 ,
      spaceBetween:30 , 
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
})