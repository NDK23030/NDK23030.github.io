// Hamburger

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      overlay = document.querySelector('.menu__overlay'),
      closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    menu.addEventListener('click',(e) => {
        if(e.target === overlay) {
            menu.classList.remove('active');
        }
    });


//Counters
const counters = document.querySelectorAll('.skills__rating-counter'),
      lines = document.querySelectorAll('.skills__rating-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Smooth scroll and page up

const pageUp = document.querySelector('.pageup');
function getScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	let documentHeight = Math.max(
		document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight,
		document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight);
    
        return Math.round(((scrollTop / (documentHeight - windowHeight)) * 100))
}
window.addEventListener('scroll', () => {
    if(getScroll() > 30) {
        pageUp.style.opacity = 1;
    } else {
        pageUp.style.opacity = 0;
    }
});

const links = document.querySelectorAll('[data-smooth]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const id = link.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
