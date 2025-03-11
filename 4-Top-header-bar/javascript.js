document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const line = document.getElementById('line');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const linkWidth = link.offsetWidth;
            const linkLeft = link.offsetLeft;

            line.style.width = `${linkWidth}px`;
            line.style.left = `${linkLeft}px`;
        });

        link.addEventListener('mouseleave', function() {
            const activeLink = document.querySelector('nav a.active');
            if (activeLink) {
                const activeLinkWidth = activeLink.offsetWidth;
                const activeLinkLeft = activeLink.offsetLeft;

                line.style.width = `${activeLinkWidth}px`;
                line.style.left = `${activeLinkLeft}px`;
            } else {
                line.style.width = '0';
            }
        });
    });

    // Initialize the line position based on the active link
    const activeLink = document.querySelector('nav a.active');
    if (activeLink) {
        const activeLinkWidth = activeLink.offsetWidth;
        const activeLinkLeft = activeLink.offsetLeft;

        line.style.width = `${activeLinkWidth}px`;
        line.style.left = `${activeLinkLeft}px`;
    }
});