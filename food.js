window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
})




function limon(){
    var lll = document.querySelector(".menutoggle");
    lll.addEventListener('mouseenter',function(){
        lll.style.width = "300px"
    })
    lll.addEventListener('mouseleave',function(){
        lll.style.width = "55px"
    })
    lll.style.width = "55px";
}



function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.1;
    if(introPosition< screenPosition){
        introText.classList.add('intro-appear')
    }else{
        introText.classList.remove('intro-appear')
    }
}

window.addEventListener('scroll',scrollAppear);


window.onload = function(){
    var effect = document.getElementsByClassName("content")[1];
    window.addEventListener('scroll',scrollEffect);
    function scrollEffect(){
        if(window.scrollY>=900){
            effect.style.opacity ='1';
            effect.style.transform = "translateX(0px)";
            effect.style.transition = '1s ease-in-out';
        }
        else{
            effect.style.opacity = '0';
            effect.style.transform = 'translateX(50px)';
        }
}
    scrollEffect();
} 
