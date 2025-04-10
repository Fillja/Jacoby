// HANDLING POTENTIAL CACHING
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
};


// BURGER MENU
const burgerButton = document.getElementById('burger-button');
const closeButton = document.getElementById('close-button');
const burgerMenu = document.getElementById('burger-menu');

const handleClick = () => {
    if(burgerMenu.classList.contains('hidden')){
        burgerMenu.classList.remove('hidden');
        burgerMenu.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    }
    else{
        burgerMenu.classList.add('hidden');
        document.body.style.overflow = '';

        burgerMenu.addEventListener('transitionend', function handler(e) {
            if (e.propertyName === 'transform') {  
                burgerMenu.style.visibility = 'hidden';
                burgerMenu.removeEventListener('transitionend', handler);
            }
        });
    }
}

burgerButton.addEventListener('click', handleClick);
closeButton.addEventListener('click', handleClick);


// SCROLL REVEAL
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealElements(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });

    function revealElements(section) {
        const reveals = section.querySelectorAll(".reveal");

        reveals.forEach((reveal, index) => {
            setTimeout(() => {
                reveal.classList.add("active");
            }, index * 600);
        });
    }
});


// TV CAROUSEL
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(image => image.classList.remove('active'));

        images[index].classList.add('active');
    }

    showImage(currentIndex);

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); 
});