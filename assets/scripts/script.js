const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');
 

    burger.addEventListener('click', () => {

           //toggle nav

        nav.classList.toggle('nav-active');

            //animating links

    navlinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else{
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
        }
       
        });
         //burger animation
        burger.classList.toggle('toggle');
    });


   
}

navSlide(); 