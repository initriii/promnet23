// main.js

// Add JavaScript code for your website here

// Example: Add a click event listener to the "Learn More" button in the home section
const learnMoreButton = document.querySelector('#home .button');
learnMoreButton.addEventListener('click', () => {
    // You can add custom functionality here, like scrolling to the "About" section
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
