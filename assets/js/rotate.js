window.onload = function() {
    const image = document.querySelector('.profile-image');
    
    let angle = 0;
    function rotateImage() {
        angle = (angle + 1) % 360; // Increment the angle
        image.style.transform = `rotate(${angle}deg)`; // Apply the rotation
    }

    // Rotate every 10 milliseconds for smooth rotation
    setInterval(rotateImage, 20);
};
