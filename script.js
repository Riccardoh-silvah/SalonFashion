//abri e fecha o menu quando clicado no icone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}
//esconde o menu quando clicado em algum item
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })

}
//mudar o header da página quando der um scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
        if (window.scrollY >= navHeight) {
            header.classList.add('scroll')
        } else {
            header.classList.remove('scroll')
        }
    })
    //Iniciando o swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});

//scrollreveal: mostra os elementos da página
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})
scrollReveal.reveal(
    `#home .imagem, #home.text,
    #about .imagem, #about.text,
    #services header, #services.card,
    #testimonials header, #testimonials.testimonials,
    #contact .text, #contact.links
    `, { interval: 100 }

)