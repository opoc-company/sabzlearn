let mobile = document.querySelector('.mobile-icon')
let mobileMenu = document.querySelector('.main-header-mobile__menu')
let mobileClose = document.querySelector('.mobile-icon-close')
mobile.addEventListener('click', () => {
    console.log('ok')
    mobileMenu.classList.add('mobile-click')
})
mobileClose.addEventListener('click', () => {
    console.log('okff')
    mobileMenu.classList.remove('mobile-click')

})

// NEWWW
const swiper = new Swiper('.swiper-1', {
    speed : 600,
    autoplay : true,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // autoplay : {
    //     delay : 500
    // },

    breakpoints : {
        576 : {
            slidesPerView : 2
        },
        992 : {
            slidesPerView : 3
        },
        1200 : {
            slidesPerView : 4
        }

    },

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next__popular',
      prevEl: '.left__popular',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

/*‌ comment */

const swiper2 = new Swiper('.swiper-2', {
    speed : 700,
    autoplay : true,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    // autoplay : {
    //     delay : 500
    // },

    breakpoints : {
        576 : {
            slidesPerView : 2
        },
        992 : {
            slidesPerView : 3
        },
        1200 : {
            slidesPerView : 4
        }

    },

  

  
    // Navigation arrows
    navigation: {
      nextEl: '.next__popular-1',
      prevEl: '.left__popular-1',
    },
  
    // And if we need scrollbar

  });