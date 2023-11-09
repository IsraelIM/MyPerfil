//Menu Flexivel
function removeNavbar(){
    menuIcon.classList.replace('fa-times','fa-navicon');
    navbar.style='display:none'
    icon = true;
}
let menuIcon = document.querySelector('#menu-icon');
let icon = true;
let navbar = document.querySelector('.navbar');
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

// Link de Selecção do Menu
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

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
    if(document.querySelector('#menu-icon').style.display=''=='')
        removeNavbar();
};
