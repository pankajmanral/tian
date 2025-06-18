const hamburgerBtn = document.getElementById('hamburger')
const sidebar = document.querySelector('aside')

hamburgerBtn.addEventListener('click', function(){
    this.classList.toggle('cross')
    if(hamburgerBtn.classList.contains('cross')){
        sidebar.style.transform = 'translateX(0%)'
        document.querySelector('body').style.overflow = 'hidden'
    }else{
        sidebar.style.transform = 'translateX(-100%)'
        document.querySelector('body').style.overflow = 'auto'
    }
})