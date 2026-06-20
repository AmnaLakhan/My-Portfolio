const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function(){
    navlinks.classList.toggle('active')
});


const phrases = ["Computer Systems Engineer", "Frontend Developer", "Problem Solver", "Hardware Tinkerer"];
const typedSpan = document.getElementById('typed');

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typedSpan.textContent = currentPhrase.slice(0, charIndex);

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 300;
    }

    setTimeout(type, speed);
}

type();

const contactForm = document.querySelector('form[name="contact"]');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(contactForm);

    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
    })
    .then(() => {
        alert('Message sent successfully!');
        contactForm.reset();
    })
    .catch((error) => {
        alert('Something went wrong, please try again.');
    });
});
