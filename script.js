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


//TV CAROUSEL
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function showImage(index) {
        // Remove active class from all images
        images.forEach(image => image.classList.remove('active'));

        // Add active class to the current image
        images[index].classList.add('active');
    }

    // Initial image display
    showImage(currentIndex);

    // Function to cycle through images
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
        showImage(currentIndex);
    }

    // Set interval to change the image every 3 seconds
    setInterval(nextImage, 3000); // Change image every 3000ms (3 seconds)
});