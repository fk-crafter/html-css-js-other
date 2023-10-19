const badge = document.getElementById('notificationBadge');
let amplitude = 2;
let counter = 0;

function floatBadge() {
    const posY = 50 + amplitude * Math.sin(counter);
    badge.style.top = posY + '%';
    counter += 0.05;
    requestAnimationFrame(floatBadge);
}

floatBadge();
