/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.header__overlay a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.header__overlay a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL TOP ===============*/
scrollTop = document.getElementById("scroll__top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollTop.style.display = "inherit";
  } else {
    scrollTop.style.display = "none";
  }
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true,
})

sr.reveal(`.home__box, .projects__title, .footer__links, .footer__info, .header__links`, {delay: 700})
sr.reveal(`.home__scroll-box, .home__scroll, .projects__container`, {delay: 900, origin: 'bottom'})
sr.reveal(`.about__img`, {distance: '120px', origin: 'left'})
sr.reveal(`.about__box`, {distance: '120px', origin: 'right'})
sr.reveal(`.scroll__top, .scroll__icon`, {delay: 700, distance: '120px', origin: 'right'})
sr.reveal(`.header__logo`, {delay: 700, distance: '120px', origin: 'left'})
