function parrallax(element, distance, speed){
    const item = document.querySelector(element);

    item.style.transform = 'translateY(' + (speed * distance) +  'px)';
}

function parrallaxX(element, distance, speed){
    const item = document.querySelector(element);

    item.style.transform = 'translateY(60vh)' + ' translateX(' + (speed * distance) + 'px)';
}

var elmo = document.querySelector('#president');
var text = document.querySelector('.screen-container h1');

window.addEventListener('scroll', function(){
    if(window.scrollY < 565){
        parrallax('.screen-container', window.scrollY, 1);
        parrallax('nav', window.scrollY,1);
        text.style.transform = 'translateY(60vh)' + ' translateX(' + (window.scrollY) + 'px)';
        elmo.style.transform = 'translateY(10vh)' + ' translateX(' + (window.scrollY) + 'px)';
    }
    console.log(window.scrollY);
});
