/**
 * Service Workers
 * - Interfaz serviceWorker
 * - serviceWorker lifeCycle: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
 * - Registrar un service worker con el método Register()
 * - enviar mensajes con el metodo postMessage()
 * - evento Fetch
 * - Registrar Caché y mostrar sitio web offline
 * - Chat Realtime
 */
if (navigator.serviceWorker) {
    // Instalacion del serviceWorker en el computador
    navigator.serviceWorker.register("sw.js");
}

// Antes de trabajar con las peticiones del service worker (en este caso el mensaje) debemos asegurar que este preparado con ready

// Enviar un mensaje al service worker
navigator.serviceWorker.ready.then(res => console.log(res.active.postMessage("Hola papu")));

// Recibir el mensaje del servide worker
navigator.serviceWorker.addEventListener("message", e => {
    console.log("Mensaje recibido del Service Worker");
    console.log(e.data);
})

// setTimeout(() => {
//     navigator.serviceWorker.postMessage("Hola papu, cómo andas?");
// }, 3000)