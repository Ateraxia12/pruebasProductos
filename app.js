

document.getElementById('filterInput').addEventListener('keyup', function() {
    const filterValue = this.value.toLowerCase();
    const items = document.querySelectorAll('#itemsList li');
    
    items.forEach(function(item) {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(filterValue)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});

// buscador-2
document.getElementById('filterInput-2').addEventListener('keyup', function() {
    const filterValue = this.value.toLowerCase();
    const items = document.querySelectorAll('#itemsList li');
    
    items.forEach(function(item) {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(filterValue)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});

// --------------
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', (event) => {
        navLinks.classList.toggle('active');
        event.stopPropagation(); // Evita que el clic en el botón de hamburguesa cierre el menú inmediatamente
    });

    // Cierra el menú cuando se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Evita el cierre del menú si se hace clic dentro del menú
    navLinks.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});