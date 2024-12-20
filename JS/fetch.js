let products = []
const productWrapper = document.getElementById('product-wrapper')

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(productosRespuesta => {

                /// # SI LA PROMESA SE RESOLVIO CORRECTAMENTE
        console.log(productosRespuesta)
        products = productosRespuesta
        pintarProductos()

    }).catch((error) => {
        // # si la promesa de mi fetch se rechazo
        alert('Error al obtener los datos')
    })

    function pintarProductos() {
        productWrapper.innerHTML = ''
        for(let prod of products) {

            productWrapper.innerHTML += `<div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card shadow w-100">
                    <img class="card-img-top card-image" src="${prod.image}" alt="${prod.title}">

                    <div class="card-body">
                        <h5 class="card-title card-main-title">${prod.title}</h5>
                        <p class="card-text">
                            ${prod.description}
                        </p>
                        <h5 class="text-primary text-center"></h5>
                        $ ${prod.price}
                        <a href="/pages/product-detail?id=${prod.id}" class="btn btn-primary">VER DETALLES</a>
                    </div>

                </div>

            </div> `

        }

    }


    