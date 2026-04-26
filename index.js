
//
//
//
let isModalOpen = false;
let contrastToggle = false;

const scaleFactor = 1/20;

function openModal(){
    isModalOpen = true;
    document.body.classList.add('modal--open');
}

function closeModal(){
    isModalOpen = false;
    document.body.classList.remove('modal--open');
    document.querySelector('.modal__overlay--success').classList.remove('modal__overlay--visible');
    document.querySelector('.modal__overlay--loading').classList.remove('modal__overlay--visible');
    document.getElementById('contact__form').reset();
}

function bindModalTriggers() {
    const openTriggers = document.querySelectorAll('[data-open-modal]');
    const closeTriggers = document.querySelectorAll('[data-close-modal]');

    openTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (event) => {
            if (trigger.tagName === 'A') {
                event.preventDefault();
                const targetSelector = trigger.getAttribute('href');
                if (targetSelector && targetSelector.startsWith('#') && targetSelector.length > 1) {
                    document.querySelector(targetSelector)?.scrollIntoView({ behavior: 'smooth' });
                }
            }
            openModal();
        });
    });

    closeTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            closeModal();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    bindModalTriggers();
});

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add('modal__overlay--visible');
    emailjs
        .sendForm(
            'service_4wkc9dt',
            'template_kw1gueg',
            event.target,
            'FJycpJmjl6xe6BqjR'
        )
        .then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList.add('modal__overlay--visible');
        })
        .catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert(
                "The email service is temporarily unavailable. Please contact me directly at \"captainarmoreddude@gmail.com\" !"
            );
        })
}


function toggleModal(){
    if (isModalOpen){
        closeModal();
        return;
    }
    openModal();
}
// Public key: FJycpJmjl6xe6BqjR

function moveBackground(event){
 
const shapes = document.querySelectorAll(" .shape");
const x = event.clientX * scaleFactor;
const y = event.clientY * scaleFactor;

for( let i = 0; i < shapes.length; ++i){
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
}
    
}