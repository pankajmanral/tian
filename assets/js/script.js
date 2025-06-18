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