// En los serviceWorkers el equivalente de this es self
self.addEventListener("install", e => {
    // Esto solo sucede una vez, ya que el service worker solo se instala una vez
    console.log("Instalando Service Worker...");
})

self.addEventListener("activate", () => {
    console.log("El Service Worker esta activo");
})

// Para trabajar con un error usamos
self.addEventListener("error", (e) => {
    // Accion para manejar el error
})

// Por cada vez que el usuario actulize la pagina esto lo detecta
self.addEventListener("fetch", () => {
    console.log("Service Worker interceptando petición");
})

// Enviando un mensaje a la pagina
self.addEventListener("message", (e) => {
    console.log("Mensaje recibido del Navegador:");
    console.log(e.data);
    e.source.postMessage("Hola brother");
})

