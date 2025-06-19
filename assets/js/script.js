AOS.init()

const header = document.querySelector('header')
const nav = document.querySelector('nav')

window.addEventListener('scroll', function(){
    if(window.scrollY >= 80){
        header.style.boxShadow = 'rgba(135, 135, 135, 0.2) 0px 8px 24px'
        nav.style.padding = '15px 0'
    }else{
        header.style.boxShadow = 'rgba(149, 157, 165, 0.2) 0px 0px 0px'
        nav.style.padding = '40px 0'
    }
})

const scrollBtn = document.getElementById('sroll-to-top-btn')
window.addEventListener('scroll', function(){
    if(window.scrollY >= 150){
        scrollBtn.style.display = 'block'
    }else{
        scrollBtn.style.display = 'none'
    }
})

function scrollToTop(){
    window.scroll({
        top : 0,
        left : 0,
        behavior : 'smooth'
    })
}

scrollBtn.addEventListener('click', function(){
    scrollToTop()
})

let swiperInstance;
function handleSwiper() {
    if (window.innerWidth <= 768) {
        if (swiperInstance) {
            swiperInstance.destroy(true, true)
            swiperInstance = null
        }
    } else {
        if (!swiperInstance) {
            swiperInstance = new Swiper('.swiper', {
                loop: false,
                spaceBetween: 24,
                breakpoints: {
                    1200: {
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 2.5,
                        centeredSlides : true,
                        loop : true
                    },
                    768 : {
                        slidesPerView : 2,
                        centeredSlides : false
                    }
                }
            })
        }
    }
}

window.addEventListener('resize', handleSwiper);
window.addEventListener('DOMContentLoaded', handleSwiper);

const toggleBtn = document.getElementById('toggle-btn')
toggleBtn.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('dark')
    if(document.querySelector('body').classList.contains('dark')){
        document.querySelector('body').style.backgroundColor = '#171717'
    }else{
        document.querySelector('body').style.backgroundColor = '#FFF'
    }
})

const mobileToggleBtn = document.getElementById("mobile-dark-mode-btn")
mobileToggleBtn.addEventListener('click', function(){
    document.querySelector('body').classList.toggle('dark')
    if(document.querySelector('body').classList.contains('dark')){
        document.querySelector('body').style.backgroundColor = '#171717'
        this.textContent = 'Light Mode'
    }else{
        document.querySelector('body').style.backgroundColor = '#FFF'
        this.textContent = 'Dark Mode'
    }
})