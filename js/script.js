let menuIcon = document.querySelector('#barsMenu');
let menu = document.querySelector('.menu');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-times');
    menu.classList.toggle('active-menu');
};

let section = document.querySelectorAll('section');
let menuLinks = document.querySelectorAll('header .menu a');


window.onscroll = () =>{
    menuIcon.classList.remove('fa-times');
    menu.classList.remove('active-menu');

    section.forEach(sec =>{

      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        menuLinks.forEach(links =>{
          links.classList.remove('active-menu');
          document.querySelector('header .menu a[href*='+id+']').classList.add('active-menu');
        });
      }; 


    });
};

document.querySelector('#searchMenu').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active-menu');
};

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active-menu');
};

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0 : {
      slidesPerView: 1,
    }, 
    640 : {
      slidesPerView: 2,
    }, 
    768 : {
      slidesPerView: 2,
    }, 
    1024 : {
      slidesPerView: 3,
    }, 
  }
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
  setInterval(loader, 2600);
}
window.onload = fadeOut;