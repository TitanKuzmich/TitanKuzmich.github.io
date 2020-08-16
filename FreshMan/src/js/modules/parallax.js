const parallax = (relative, particles) => {
    const rel = document.querySelector(relative);
    const part = document.querySelectorAll(particles);

    function moveParticles(e){
        part.forEach(layer => {
            const speed = layer.getAttribute('data-speed');

            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        })
    }


    rel.addEventListener('mousemove', moveParticles);
};

export default parallax;