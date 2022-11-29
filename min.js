let navbar=document.querySelector('.navbar');
document.querySelector('#list-cart').onclick =() =>{
    navbar.classList.toggle('active');
}


var swiper = new Swiper(".wrapperSlide", {
    loop:true,
      spaceBetween: 10,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });


  // accodion
  $(document).ready(function(){
    $(".pre").accordion();
});
