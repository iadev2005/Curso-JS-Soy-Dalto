/**
 * Fetch
 * - Introduccion
 * - Basado en promesas
 * - Objeto fetch
 * - text()
 * - json()
 * - blob()
 * - formData()
 * - arrayBuffer()
 */

// Esto es el reemplazo de XMLHttpRequest

// Fetch trabaja con promesas


// Y como es una promesa accedemos con un then
// peticion.then(resultado => console.log(resultado));

// Lo único que los datos están encapsulados
// Para mostrarlos usamos las funciones que tiene fetch

// El primer then maneja la respuesta de la solicitud, y si es válida, 
// pasamos al siguiente then para convertir la respuesta a JSON, 
// lo que devuelve otra promesa que también necesitamos manejar.

peticion = fetch("https://reqres.in/api/unknown/2");

// fetch("https://reqres.in/api/unknown/2")
//     .then(resultado => resultado.json())
//     .then(data => console.log(data));

// Con eso lo recibimos como string
// .then(resultado => resultado.text())

// Si lo queremos como JSON, usamos .json directamente
// .then(resultado => resultado.json())

// Para usar post:
// fetch("https://reqres.in/api/users", {
//     method : "POST",
//     body : JSON.stringify({
//         "nombre" : "Ignacio",
//         "apellido" : "Aliendres"
//     }),
//     headers : {
//         "Content-type" : "application/json"
//     }
// })
//     .then(resultado => resultado.json())
//     .then(data => console.log(data));

// Para que este más limpio

let headers = {
    method : "POST",
    body : JSON.stringify({
        "nombre" : "Ignacio",
        "apellido" : "Aliendres"
    }),
    headers : {
        "Content-type" : "application/json"
    }
}

// Dependiendo de los datos el content-type y el application/json varian

fetch("https://reqres.in/api/users", headers)
    .then(resultado => resultado.json())
    .then(data => console.log(data));

// Un ejemplo curioso, es lo que sucede con una imagen

// Accede a la imagen y la lee

// URL es un objeto que tiene un metodo que nos crea un URL para que todo el objeto pasado por parámetro (obtenido a partir de blob) se pueda visualizar
const imagen = document.querySelector(".imagen");

fetch("ialogo.jpg")
    .then(res => res.blob())
    .then(img => imagen.src = URL.createObjectURL(img))
