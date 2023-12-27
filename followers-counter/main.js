function increaseCounter() {
    const counterElement = document.getElementById('counter');
    let currentCount = parseInt(counterElement.textContent.replace(',', ''), 10);
    currentCount += 1;
    
    counterElement.textContent = formatNumber(currentCount);
    counterElement.classList.add('counter-increase');

    setTimeout(() => {
        counterElement.classList.remove('counter-increase');
    }, 1000);
}

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

setInterval(increaseCounter, 3000);
