$(document).ready(function(){
    const swiper = new Swiper('.popkorn_swiper', {
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 300,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints:{
        320:{
          slidesPerView: 1,
        },
        500:{
          slidesPerView: 2,
        },
        768:{
          slidesPerView: 3,
        },
        900:{
          slidesPerView: 4,
        },
        1200:{
          slidesPerView: 5,
        },
       
      }
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
// kwork 
const burgerBtn= document.querySelector('.burger-btn');
const headerRow= document.querySelector('.header_row');
burgerBtn.onclick = () => {
  headerRow.classList.toggle('header-show');
}

const navItems = document.querySelectorAll('.nav_item');
for (let i = 0; i < navItems.length; i++) {
  let navItem = navItems[i];
  navItem.onclick = () => {
    headerRow.classList.toggle('header-show');
  }
  
}