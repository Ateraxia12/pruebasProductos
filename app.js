

// -------------

// ------------------------------

const divProductos = document.querySelector("#itemsList");

const productos = [
    
    {
        nombre: 'Cultivo de maíz',
        imagen: 'images/Productos_img/Maiz.jfif',
        descripcion: 'El cultivo de maíz involucra la siembra y el cuidado de las plantas de maíz, asegurando el crecimiento adecuado para obtener mazorcas de calidad.',
        enlace: '#'
    },
    {
        nombre: 'Cultivo de Naranja',
        imagen: 'images/Productos_img/naranja.jfif',
        descripcion: 'El cultivo de naranjas requiere suelos bien drenados y fértiles, clima cálido con temperaturas entre 20-30°C y pleno sol. Se planta en primavera u otoño.',
        enlace: '#'
    },
    {
        nombre: 'Cultivo de girasol',
        imagen: 'images/Productos_img/piña.jfif',
        descripcion: 'El cultivo de girasol se realiza para obtener tanto aceite como semillas comestibles. El cuidado del cultivo implica una gestión adecuada del agua y plagas.',
        enlace: '#'
    }
];

productos.forEach((producto) => {
    const newLi = document.createElement('li'); // Crea un li en lugar de un div
    newLi.classList.add('li-product');
    newLi.innerHTML = `
        <div class="card">
            <img class="img-productos" src="${producto.imagen}" alt="img-${producto.nombre.toLowerCase()}">
            <div class="boton">
                <button class="button-ver-detalles">Consultar</button>
            </div>
            <div class="card__content">
                <p class="card__title">${producto.nombre}</p>
                <p class="card__description">
                    ${producto.descripcion} <a href="${producto.enlace}">... ver más</a>
                </p>
            </div>
        </div>
    `;
    divProductos.appendChild(newLi);
});