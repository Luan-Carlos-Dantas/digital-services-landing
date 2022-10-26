window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){
  showNavOnScroll()
}

function showNavOnScroll(){
  let menu = document.querySelector('#navigation')

  if(scrollY != 0){
      menu.classList.add("scroll")
  }else{
      menu.classList.remove("scroll")
  }
}

var forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
    for (var c in t)
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};


let body = document.querySelector('body');
let hamburgers = document.querySelectorAll(".hamburger");
let hamburger = document.querySelector(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener(
      "click",
      function () {
        this.classList.toggle("is-active");
      },
      false
    );

    hamburger.addEventListener('click', function(){
        if(!body.classList.contains('show-menu')){
            body.classList.add('show-menu')
        }else{
            body.classList.remove('show-menu')
        }
        });
  });
}



window.addEventListener('load', ()=>{
    if(body.classList.contains('show-menu')){
        body.classList.remove('show-menu')
    }

    console.log('oi')
})

// Testimonials slide
const swiper = new Swiper('.swiper',{
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{
      1400:{
        slidesPerView:2,
        setWrapperSize:true
      }
    },
});

swiper.slideNext();