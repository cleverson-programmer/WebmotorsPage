$(document).ready( function(){
    ScrollReveal().reveal('.efeito-cadastro', {
        duration: 2000,
        distance: '500px'
    })

    ScrollReveal().reveal('.efeito-img', {
        duration: 2000,
        distance: '500px',
        origin: 'left',
    })

    ScrollReveal().reveal(('.title-main'), {
        duration: 3000,
        distance: '90px',
        rotate:{
            x:180,
            y:180,
        }
    })

    ScrollReveal().reveal('.efeito-img-form', {
        duration: 1000,
        distance: '90px',
        origin: 'right'
    })

    ScrollReveal().reveal('.efeito-title-form', {
        duration: 2000,
        distance: '90px'
    })

    ScrollReveal().reveal('.efeito-form', {
        duration: 1000,
        distance: '90px',
        origin: 'left'
    })
})
