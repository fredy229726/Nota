const createStar = () => {
    const star = document.createElement('div');
    star.classList.add('star');

    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;

    const size = Math.random() * 3 + 1; 
    star.style.borderWidth = `${size}px`;

    star.style.animationDuration = `${Math.random() * 2 + 2}s`;

    document.body.appendChild(star);

    star.addEventListener('animationend', () => {
        star.remove();
    });
};

setInterval(createStar, 200);