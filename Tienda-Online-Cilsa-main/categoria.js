const products = {
    gabinetes: [
        { title: "Gabinete 1", description: "Gabinete con RGB y ventilación superior.", image: "gabinete1.jpg" },
        { title: "Gabinete 2", description: "Gabinete con diseño minimalista.", image: "gabinete2.jpg" }
    ],
    memorias: [
        { title: "Memoria 1", description: "Memoria RAM DDR4 8GB.", image: "memoria1.jpg" },
        { title: "Memoria 2", description: "Memoria RAM DDR4 16GB.", image: "memoria2.jpg" }
    ],
    graficas: [
        { title: "Tarjeta Gráfica 1", description: "NVIDIA RTX 3080.", image: "grafica1.jpg" },
        { title: "Tarjeta Gráfica 2", description: "AMD Radeon RX 6800.", image: "grafica2.jpg" }
    ]
};

// Función para cargar la categoría seleccionada
function loadCategory(category) {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; // Limpiar el contenedor antes de cargar nuevos productos

    // Iterar sobre los productos de la categoría seleccionada
    products[category].forEach(product => {
        const card = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <a href="#" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            </div>`;
        
        // Agregar cada card al contenedor
        container.innerHTML += card;
    });
}