const targetElement = document.getElementById('animatedElement');
const startPosition = 0;
const endPosition = 100;
const duration = 1000;
const velocity = (endPosition - startPosition) / duration;
const startTime = performance.now();

function animateLinear() {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    const currentPosition = startPosition + velocity * elapsedTime;
    targetElement.style.left = currentPosition + 'px';
    if (elapsedTime < duration) {
        requestAnimationFrame(animateLinear);
    }
}

requestAnimationFrame(animateLinear);

function animateEaseIn() {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    const t = elapsedTime / duration;
    const currentPosition = startPosition + (endPosition - startPosition) * t * t;
    targetElement.style.left = currentPosition + 'px';
    if (elapsedTime < duration) {
        requestAnimationFrame(animateEaseIn);
    }
}

requestAnimationFrame(animateEaseIn);

function animateEaseOut() {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    const t = elapsedTime / duration;
    const currentPosition = startPosition + (endPosition - startPosition) * (1 - Math.pow(1 - t, 2));
    targetElement.style.left = currentPosition + 'px';
    if (elapsedTime < duration) {
        requestAnimationFrame(animateEaseOut);
    }
}

requestAnimationFrame(animateEaseOut);

function animateEaseInOut() {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    const t = elapsedTime / (duration / 2);
    const currentPosition = startPosition + (endPosition - startPosition) / 2 * (1 - Math.cos(Math.PI * t));
    targetElement.style.left = currentPosition + 'px';
    if (elapsedTime < duration) {
        requestAnimationFrame(animateEaseInOut);
    }
}

requestAnimationFrame(animateEaseInOut);

function randomizeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    targetElement.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function scaleElement() {
    const scaleFactor = Math.random() * 0.5 + 1; // Random scale factor between 1 and 1.5
    targetElement.style.transform = `scale(${scaleFactor})`;
}

function rotateElement() {
    const rotation = Math.random() * 360; // Random rotation angle between 0 and 360 degrees
    targetElement.style.transform = `rotate(${rotation}deg)`;
}

function moveRandomly() {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    targetElement.style.left = newX + 'px';
    targetElement.style.top = newY + 'px';
}

setInterval(randomizeColor, 1000);
setInterval(scaleElement, 2000);
setInterval(rotateElement, 1500);
setInterval(moveRandomly, 3000);
function fadeIn() {
    targetElement.style.opacity = '0';
    let opacity = 0;
    const interval = setInterval(() => {
        opacity += 0.05;
        targetElement.style.opacity = opacity;
        if (opacity >= 1) clearInterval(interval);
    }, 50);
}

function fadeOut() {
    let opacity = 1;
    const interval = setInterval(() => {
        opacity -= 0.05;
        targetElement.style.opacity = opacity;
        if (opacity <= 0) clearInterval(interval);
    }, 50);
}

setInterval(fadeIn, 1000);
setInterval(fadeOut, 2000);
