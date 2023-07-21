/**navigation variables**/
var nav = document.querySelector('.nav-text');
var hamburger = document.querySelector(".nav-ham");
var menu = document.querySelector('.nav-list');
var navItem = document.querySelectorAll('.nav-item');

/**carousel variables**/
var slideContainer = document.querySelector('.slide-container');
var slide = document.querySelector('.slide');
var slideBack = document.querySelectorAll('.slide-back');
var slideFront = document.querySelectorAll('.slide-front');

/**carousel event**/
slideBack.forEach(btn => {
    btn.addEventListener('click', () => {
        const slideWidth = slide.clientWidth;
        slideContainer.scrollLeft -= slideWidth;
    })

})

slideFront.forEach(btn => {
    btn.addEventListener('click', () => {
        const slideWidth = slide.clientWidth;
        slideContainer.scrollLeft += slideWidth;
    })
})

if(slide.clientWidth <= 1050) {
    slideFront.forEach(btn => {

    })       
}

/**navigation events**/

/*add menu*/
hamburger.addEventListener('click', () => { 
    menu.classList.toggle("active");
})

/*remove menu*/
navItem.forEach(item => {
    item.addEventListener('click', (e) => {
        menu.classList.remove('active');
    })
})

/*navigation animation*/
window.addEventListener('scroll', () => {
    window.pageYOffset > 700 ? nav.classList.add('active')
 : nav.classList.remove('active');
   
})


