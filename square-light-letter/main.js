document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mousemove', addLight);
    });

    function addLight(e) {
        const light = document.createElement('div');
        light.className = 'light';
        this.appendChild(light);

        const size = Math.max(this.clientWidth, this.clientHeight) * 2;
        const rect = this.getBoundingClientRect();

        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        light.style.width = light.style.height = `${size}px`;
        light.style.left = `${x}px`;
        light.style.top = `${y}px`;

        light.addEventListener('animationend', () => {
            light.remove();
        });
    }
});
