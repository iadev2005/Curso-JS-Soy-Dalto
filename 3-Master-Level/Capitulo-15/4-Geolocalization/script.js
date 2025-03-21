/**
 * Geolocalization
 * - getCurrentPosition()
 *      - parametros (position, error, options)
 *      - propiedades de option (enableHightAccuracy, timeout, maxiumAge)
 * - watchPosition()
 */

"use strict";

const geolocation = navigator.geolocation;
console.log(geolocation);

const posicion = pos => {
    console.log(pos);
    // Si quisieramos mostrar especificamente la latidud
    // console.log(pos.coords.latitude);
    // La longitude
    // console.log(pos.coords.longitude);
}

// Para manejar un probable error
const err = (e) => {
    console.log(e);
}

const options = {
    // Cuanto tiempo hay que esperar para volver a actualizar los datos (mientras se dejan a los anteriores en cache)
    maximumAge: 0,
    timeout: 3000,
    // Obtiene la ubicacion con mas precision
    enableHightAccuracy: true

}

// Da mi posicion
// geolocation.getCurrentPosition(posicion, err, options);


