const colorChangeBox = document.querySelector('.color-change-box');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    const newColor = getRandomColor();
    colorChangeBox.style.backgroundColor = newColor;
}

setInterval(changeColor, 2000);
