let products = [];
const productWrapper = document.getElementById('product-wrapper')

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(productosRespuesta => {
        // # Si la promesa se resolvió correctamente
            console.log(productosRespuesta)
        	products = productosRespuesta
            pintarProductos()

    }).catch((error) => {
        // ! Si la promesa de mi fetch se rechazo
        alert(`Error al obtener los datos`)
    })


function pintarProductos() {
    productWrapper.innerHTML = '';
    for(let prod of products) {

        productWrapper.innerHTML += `<div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card shadow w-100">
            <img class="card-img-top card-image" src="${prod.image}" alt="${prod.title}">
            
            <div class="card-body">
                <h5 class="card-title card-main-title">${prod.title}</h5>
                <p class="card-text">
                    ${prod.description}
                </p>
                <h5 class="text-primary text-center">
                    $ ${prod.price}
                </h5>
                <a href="/pages/product-detail.html?id=${prod.id}" class="btn btn-primary">Ver detalles</a>
            </div>

        </div>
    </div>`

    }


    
}
