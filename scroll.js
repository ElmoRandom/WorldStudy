function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition =  window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    function animation(currentTime){
        if(startTime === null){
            startTime = currentTime;    
        }
        var timeElapsed = currentTime- startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }    
    function ease(t,b,c,d){
        t /= d/2;
        if(t < 1) return c/2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var buttonFirst = document.querySelector('.firstBtn');
buttonFirst.addEventListener('click', function(){
        const nav = document.querySelector('nav ul');
        //console.log(document.body.clientWidth);
        if(document.body.clientWidth < 768) nav.classList.toggle('nav-active');
        
        smoothScroll('#refFir', 3000);
        console.log("here");
    }
)

var buttonSecond = document.querySelector('.secondBtn');
buttonSecond.addEventListener('click', function(){
        const nav = document.querySelector('nav ul');
        if(document.body.clientWidth < 768) nav.classList.toggle('nav-active');
        smoothScroll('#refSec', 3000);
        console.log("here");
    }
)

var buttonThird = document.querySelector('.thirdBtn');
buttonThird.addEventListener('click', function(){
        const nav = document.querySelector('nav ul');
        if(document.body.clientWidth < 768) nav.classList.toggle('nav-active');
        smoothScroll('#refTh', 3000);
        console.log("here");
    }
)
