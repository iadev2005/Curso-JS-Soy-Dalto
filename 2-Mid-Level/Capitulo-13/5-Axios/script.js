/**
 * Libreria Axios
 * - Introducción e instalación https://github.com/axios/axios
 * - Basado en promesas
 * - Objeto axios
 * - Metodo get() y post()
 * - Formas de enviar los datos
 * - Ventajas
 */

// Axios es el reemplazo más moderno de fetch

// Así hariamos una consulta en fetch
// fetch("informacion.txt")
//     .then(res => res.json())
//     .then(res => console.log(res))

// En axios no viene encapsulado, asi que nos evitamos una línea

// Si queremos solo la data usamos .data
axios("informacion.txt")
    .then(res => console.log(res.data))

// Por defecto eso trabaja con peticiones GET
// Axios pone los headers automático

// Ya sea para un post o un get basta con poner ya sea axios.post o axios.get (recordadndo que es get por defecto)

// axios.post("informacion.txt")
//     .then(res => console.log(res.data))

let persona = {
    "nombre" : "Ignacio",
    "apellido" : "Aliendres"
}

// En el segundo parametro del post se envia nuestro objeto (nota: lo envia de forma alfabética)
axios.post("https://reqres.in/api/users", persona)
    .then(res => console.log(res))

// También podríamos enviarlo así
// axios("https://reqres.in/api/users", {
//     method : "post",
//     data: {"nombre" : "lucas"}
// })
//     .then(res => {
//         console.log(res);
//     })