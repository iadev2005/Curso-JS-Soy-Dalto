/**
 * AJAX (JS Asincrono)
 * - Introduccion e instalacion del servidor
 * - Objeto XMLHttoRequest
 * - Enviar peticiones GET
 * - Trabajar el resultado de las peticiones
 * - Objeto ActiveXObject
 * - Nueva forma de trabajar el resultado
 * - Enviar peticiones POST
 * - Objeto FormData
 */

// A diferencia de las peticiones comunes que se le hacen a un servidor, AJAX hace los cambios sin actualizar la pagina, envia la peticion y recibe la respuesta del servidor de manera paralela

// Lo trabajaremos full vanilla, sin librerias ni nada de eso, si quisieramos aplicarlo en un proyecto real obviamente seria necesaria la importacion

let peticion;

if (window.XMLHttpRequest) {
    peticion = new XMLHttpRequest();
} else {
    // En caso de que el navegador sea internet explorer
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}



// Hay un evento que detecta cada vez que cambia el readystate, que es el que estamos usando abajo
// peticion.addEventListener("readystatechange", ()=> {
    // console.log(peticion.readyState);
    // Y bueno para mostrar la respuesta usamos response

    // Claro esto solo se muestra si el estado es 3 o 4, eso lo podemos validar
    // console.log(peticion.response);

    // Para asegurar que no hayan errores, antiguamente se hacia esto:

    // Si el status es 200 esta todo OK
    // if ((peticion.readyState == 4) && peticion.status == 200) {
    //     onsole.log(peticion.status);
    //     console.log(peticion.response);
        // Aca podemos ver si en el estado esta todo ok, si falla (por ejemplo fallamos en la url) mostramos el error 404
        // console.log(peticion.status);
    // }
// });

// Todo esto se evita usando la manera moderna
peticion.addEventListener("load", () => {
    // Hay múltiples errores, lo manejaremos de la manera mas basica
    let respuesta;
    if (peticion.status == 200) respuesta = peticion.response;
    else respuesta = "Lo siento, no se ha encontrado el recurso";
    console.log(respuesta);
    // Sigue siendo un string, no lo hemos deserializado
    // console.log(typeof respuesta);

    // Entonces lo convertimos y tenemos nuestro objeto
    let datos = JSON.parse(respuesta);
    console.log(datos);
})

// El primer estado "1" quiere decir que la solicitud se envio correctamente

// El segundo estado "2" significa que la petición fue recibida correctamente

// El tercer estado "3" es que se esta procesando la peticion

// EL cuarto estado "4" significa que todo esta listo y ya se puede acceder al resultado de la respuesta

// Metodo que abre una peticion GET y accede a la informacion .txt
peticion.open("GET", "informacion.txt");

// Si ponemos mal el nombre del archivo se genera un error con los códigos de respuesta (Esto se podría ver en profundidad si trabajaramos con node.js por ejemplo)

// Se envia la peticion
peticion.send(); // Es importante enviarlo para cargarlo
// En respones tenemos el resultado, pero solo nos devolvera la informacion si el codigo de respuesta es 3 o 4 y el estatus en 200

// console.log(peticion);

// En las peticiones post

