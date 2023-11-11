//Criacao de variaves Menu Flexivel
let menuIcon = document.querySelector('#menu-icon-top');
let navbar = document.querySelector('.navbar');
let icon = true;
//Funçao ver mais infomaçoes
function aboutMore(){
    let aboutMore = document.querySelector('.about-more');
    aboutMore.style.display='block';
}
//Funçao de Remover a navBar apos a acçao
function removeNavbar(){
    menuIcon.classList.replace('fa-times','fa-navicon');
    navbar.style='display:none'
    icon = true;
}
menuIcon.onclick = () => {
    if (icon)
    {
        menuIcon.classList.replace('fa-navicon','fa-times');
        navbar.style='display:block';
        icon = false;
    }
    else
    {
        removeNavbar();
    }
};
// Link de Selecção do Menu Activo
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
//Acçoes determinada para o rolar da tela
window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 160;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        }
    });
    // Navbar Boblavel
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // Remove in click
    if(screen.width < 769)
        removeNavbar();
};
/*
    //Animaçao de Movimentaçao da Tela
    ScrollReveal({
        reset:false,
        distance:'80px',
        duration: 2000,
        delay: 150
    });
    ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portifolio-box, contact form', {origin:'bottom'});
    ScrollReveal().reveal('.home-content h1, .about-img ', {origin:'left'});
    ScrollReveal().reveal('.home-content p, .about-content ', {origin:'right'});
    //Animaçao da frase de impacto
    const Typed = new Typed('.multiple-text',{
        String: ['Developer','Engenheiro',
        'Coach','Responsavel de T.I','Docente'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop: true

    });*/