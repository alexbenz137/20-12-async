const KEY = `633a3fc80487a2fef9f553f844ea1ebc`

const lat = '-34.458068' 
const lon = '-58.914767'
const URL = `https://api.openweathermap.org/data/2.5/weather?&appid=${KEY}&units=metric`;

const inputWeather = document.querySelector('#weather-search')
const searchBtn = document.getElementById('weather-search-btn')

const climaNombre = document.getElementById('weather-name')
const climaTemp = document.getElementById('weather-temp');
const climaIcon = document.getElementById('weather-icon')

function obtenerClimaPorCoordenadas(lat, lon) {

    const parametros = `&lat=${lat}&lon=${lon}`
    
    axios.get(URL+parametros)
    .then(respuesta => {
        pintarCardClima(respuesta.data)
    })
    .catch(error => console.log(error))  
}

function localizacionInicial() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (data) => {
                const latitud = data.coords.latitude;
                const longitud = data.coords.longitude;

                obtenerClimaPorCoordenadas(latitud, longitud)


            }, (error) => {
                obtenerClimaPorCoordenadas(lat, lon);
                console.warn(`No se pudo obtener la geolocalización`)
            }
        )
    }
}
localizacionInicial()

// - Pintar los datos en la card de clima
// - Activar el buscador por ciudades
// - Geolocation de JS

function pintarCardClima(clima) {
    climaNombre.innerText = clima.name;
    climaTemp.innerHTML = `${clima.main.temp}<span>°C</span>`;
    
    const icon = clima.weather[0].icon

    climaIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" >`
}

inputWeather.addEventListener('keyup', (evento) => {

    if(evento.key === 'Enter') {

        obtenerClimaPorCiudad()

    }

})


function obtenerClimaPorCiudad() {

    const ciudad = inputWeather.value;

    axios.get(`${URL}&q=${ciudad}`)
                .then(respuesta => {

                    pintarCardClima(respuesta.data)

                }).catch((error) => console.warn(`Error al obtener ciudad`))
}

searchBtn.addEventListener('click', obtenerClimaPorCiudad)















// fetch(URL, { method: 'GET' })
//     .then(resp => resp.json())
//     .then(clima => {
//         console.log(clima)
//     })
//     .catch(error => console.log(error));

