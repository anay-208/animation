// Select all navbar items and the line
const navbarItems = document.querySelectorAll('.navbar > span');
const line = document.querySelector('.navbar .line');
const navbar = document.querySelector('.navbar');

// Add click event listener to each navbar item
navbarItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        // Calculate the scaleX and translateX values
        const scaleX = event.target.offsetWidth / navbar.offsetWidth;
        const translateX = event.target.offsetLeft;

        // Animate the line using scaleX and translateX
        line.style.transform = `translateX(${translateX}px) scaleX(${scaleX})`;
    });
});