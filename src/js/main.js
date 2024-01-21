let btnOpen = document.getElementById('btnOpen')
let btnClose = document.getElementById('btnClose')
let menu = document.getElementById('myMenu')

btnOpen.addEventListener('click', () => {
    menu.classList.remove('-right-full')
    menu.classList.add('right-0')
})

btnClose.addEventListener('click', () => {
    menu.classList.remove('right-0')
    menu.classList.add('-right-full')
})

// slider image
new Glide('.glide', {
        type: 'carousel',
        perView: 4,
        startAt: 0,
        gap: 32,
        autoplay: 3000,
        animationDuration: 1800,
        animationTimingFunc: 'cubic-bezier(0.35, 0.200, 0.440, 1.000)',
        breakpoints: {
            1280: {
                perView: 4
            },
            768: {
                perView: 3
            },
            500: {
                perView:2
            }
        }
}).mount()