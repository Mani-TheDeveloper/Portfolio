const body = document.querySelector('body')
const mode = document.querySelector('.mode');
const navLink = document.querySelectorAll('.nav-link');
const nav = document.querySelector('.nav-menu');
const bars = document.querySelector('.bars');
const cross = document.querySelector('#cross');

document.addEventListener('DOMContentLoaded', () => {
    var typed = new Typed('.typedText', {
        strings: ['Coder', 'Developer', 'Designer'],
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
    });
});

mode.addEventListener('click', () => {
    body.classList.toggle('dark');
})

navLink.forEach((item => {
    item.addEventListener('click', () => {
        navLink.forEach(menu => menu.classList.remove('active-link'));

        item.classList.add('active-link');
    })
}))

cross.addEventListener('click', () => {
    nav.style.left = '-50%';
})

bars.addEventListener('click', () => {
    nav.style.left = '0%';
})

