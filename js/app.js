$(document).ready(function(){
    const swiper = new Swiper('.popkorn_swiper', {
      spaceBetween: 30,
      slidesPerView: 6,
      autoplay: {
        delay: 300,
        disableOnInteraction: false,
      },
    });

    const swiper_2 = new Swiper('.feeback_swiper', {
      loop: true,
      slidesPerView: 4 ,
      spaceBetween:30 , 
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
})