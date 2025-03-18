/**
 * Promesas
 * - Concepto
 *      Las promesas son un objeto, donde cada dato tiene un callback, uno llamado reject, otro llamado resolve, pero a su vez representan algo, uno representa la terminación de una operación asíncrona y otra representa el fracaso de una operación asíncrona.
 * 
 *      Las promesas asincronas son resolve y reject.
 * - Que puede representar?
 *      - Terminacion de una operacion asincrona
 *      - Fracaso de una operacion asincrona
 * - Ejemplos y solucion al problema de los callbacks
 */

let nombre = "pedsro";
// Hay un callback que llama a los otros dos callbacks

// Creamos un objetos, y como parámetro constructor le pasamos resolve, reject y una función flecha
const promesa = new Promise((resolve, reject) => {
    if (nombre != "pedro") {
        reject ("Lo siento, el nombre no es " + nombre);
    } else {
        resolve(nombre);
    }
})

// En si es un objeto, pero  no lo muestra como un objeto, lo muestra como una promesa (los datos están encapsulados, no se pueden acceder a ellos)
console.log(promesa);

// Si queremos acceder a lo que hay adentro usamos .then (y accedemos a lo que esta en resolve)

// Solo para el resolve
promesa.then((resultado) => {
    console.log(resultado);
}).catch((e) => {
    console.log(e);
});

// Para manejar el error del reject usamos try - catch

