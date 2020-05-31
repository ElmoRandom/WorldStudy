const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });
    navLinks.forEach((link)=> {
        link.getElementsByClassName.animation = 'navLinkFade 0.5s ease forwards ${index/5}$';
    });
}

const app = ()=>{

}

navSlide();