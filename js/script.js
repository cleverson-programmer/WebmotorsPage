$(document).ready( function(){

    ScrollReveal().reveal('.nav-efects', {
        duration: 1000,
        distance: '500px',
        origin: 'top'
    })

    ScrollReveal().reveal('.box-balloon-login', {
        duration:4000,
        distance: '90px',
        delay: 1000,
        origin: 'top'
    })

    ScrollReveal().reveal('.carousel', {
        duration:3000,
        distance: '90px',
        origin: 'top'
    })

    ScrollReveal().reveal('.container-search', {
        duration:3000,
        distance: '90px',
        delay:2000,
        origin: 'left'
    })

    ScrollReveal().reveal('#title-section-store', {
        duration: 1000,
        distance: '90px',
        origin: 'left'
    })

    ScrollReveal().reveal('#nissan', {
        duration: 1000,
        distance: '10px',
        origin: 'left',
        rotate:{
            z:180
        }
    })

    ScrollReveal().reveal('#bmw', {
        duration: 1000,
        delay:1000,
        distance: '10px',
        origin: 'left',
        rotate:{
            z:180
        }
    })

    ScrollReveal().reveal('#toyota', {
        duration: 1000,
        delay:2000,
        distance: '10px',
        origin: 'left',
        rotate:{
            z:180
        }
    })

    ScrollReveal().reveal('#hyundai', {
        duration: 1000,
        delay: 3000,
        distance: '10px',
        origin: 'left',
        rotate:{
            z:180
        }
    })

    ScrollReveal().reveal('#hatches', {
        duration: 1000,
        delay: 500,
        distance: '180px',
        origin: 'top'
    })

    ScrollReveal().reveal('#hatches', {
        duration: 1000,
        delay: 500,
        distance: '180px',
        origin: 'top'
    })

    ScrollReveal().reveal('#pickups', {
        duration: 1000,
        delay: 1000,
        distance: '180px',
        origin: 'top'
    })

    ScrollReveal().reveal('#sedans', {
        duration: 1000,
        delay: 1500,
        distance: '180px',
        origin: 'top'
    })

    ScrollReveal().reveal('#suvs', {
        duration: 1000,
        delay: 2000,
        distance: '180px',
        origin: 'top'
    })

    ScrollReveal().reveal('#economicos', {
        duration: 1000,
        delay: 2500,
        distance: '180px',
        origin: 'top'
    })

    ScrollReveal().reveal('#arrowNext', {
        duration: 1000,
        delay: 2500,
        distance: '180px',
        origin: 'top'
    })

})

//Carrousel main
document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const totalItems = carouselItems.length;
    const intervalTime = 6000;

    function showNextImage() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalItems;
        carouselItems[currentIndex].classList.add('active');
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showPrevImage() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        carouselItems[currentIndex].classList.add('active');
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.carousel-control.next').addEventListener('click', showNextImage);
    document.querySelector('.carousel-control.prev').addEventListener('click', showPrevImage);

    setInterval(showNextImage, intervalTime);
}) 

//Form select option
$(document).ready(function() {

    let selectedOption = localStorage.getItem('selectedOption');
    if (selectedOption != '#comprar-carros') {
        $('#comprar-carros').addClass('div-effect-underline');
    }

    let selectedType = localStorage.getItem('selectedtype')
    if (selectedType != '#type-todos') {
        $('#type-todos').addClass('style-button-select');
    }

    // Close button balloon login 
    $('#closeLogin').on('click', () => {
        $('.box-balloon-login').hide();
    })


    // Form search effects select button
    $('#type-todos').on('click', function() {

        $('#type-todos').addClass('style-button-select')
        $('#type-usados, #type-novos').removeClass('style-button-select')
    
        localStorage.setItem('selectedType', 'type-todos')
    })

    $('#type-usados').on('click', function() {

        $('#type-todos, #type-novos').removeClass('style-button-select')
        $('#type-usados').addClass('style-button-select')
    
    })

    $('#type-novos').on('click', function() {

        $('#type-todos, #type-usados').removeClass('style-button-select')
        $('#type-novos').addClass('style-button-select')
    
    })

    $('#comprar-carros').on('click', function() {

        $('#comprar-carros').addClass('div-effect-underline')
        $('#comprar-motos').removeClass('div-effect-underline')

        localStorage.setItem('selectedOption', 'comprar-carros')
    })

    $('#comprar-motos').on('click', function() {

        $('#comprar-carros').removeClass('div-effect-underline')
        $('#comprar-motos').addClass('div-effect-underline')
    
    })

});

// Initial carrousel Slick
$(document).ready(function(){

    $('.carrossel').slick({
        speed: 300,
        arrow: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-next" id="arrowNext"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
        infinite:false,
        slidesToShow: 5,
        slidesToScroll: 1
    });
});

//Show to prev Arrow effect Jquery

$(document).ready(function(){
    $('#arrowNext').on('click', () =>{
        $('.slick-prev').css({'visibility' : 'visible'})
    })
})