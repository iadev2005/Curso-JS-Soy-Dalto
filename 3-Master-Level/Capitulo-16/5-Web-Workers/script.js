/**
 * Web Workers
 * - Tipos de Web Worker (Dedicated Worker, Shared Worker, Service Worker y Abstract Worker)
 * - Dedicated Worker: Worker() - Constructor
 * - Parametro Options - type, credentials y name
 * - Metodo postMessage() - Enviar mensajes entre el web worker y el script principal
 * - Evento Onmessage - Recibir mensajes entre el web worker y el script principal
 * - Metodo Terminate() - Finaliza la ejecucuion del web worker
 * - Politica de Origen Cruzado - Same Origin
 */

// El dedicated worker es el más sencillo de trabajar

"use strict";
const worker = new Worker("worker.js");
// Supongamos que generamos un new worker en otro puerto donde no estemos trabajando, el 82, por ejemplo. Bueno no podriamos hacer esto, ya es otro puerto (esto es la politica de origen cruzado)

// document.querySelector(".button").addEventListener("click", () => cargarData(".loadResults"));

// Para recibir el mensaje
worker.addEventListener("message", e => {
    console.log(e.data);
    // Una vez que nos de la respuesta lo terminamos
    worker.terminate();
})

const cargarData = async div => {
    const req = await fetch("informacion.json");
    const res = await req.json();
    const arr = res;
    document.querySelector(div).innerHTML = arr;
}

// Ya por este proceso no podriamos escribir en el input
// En estos casos lo mejor es añadirlo en el worker

// document.querySelector(".button").addEventListener("click", () => ejecutarBucle());

// const ejecutarBucle = () => {
//     while (true) {
//         console.log(1);
//     }
// }

// Claro, necesitamos una forma de saber si el worker esta funcionando, para eso le podemos mandar un mensaje con postMessage
document.querySelector(".button").addEventListener("click", () => ejecutarBucle());

const ejecutarBucle = () => {
    // worker.postMessage(true);
    worker.postMessage("Hola papu");
    // Una vez terminada la accion terminamos el bucle
    // worker.terminate();
    // De lo contrario se sigue ejecutando
}

console.log(worker);