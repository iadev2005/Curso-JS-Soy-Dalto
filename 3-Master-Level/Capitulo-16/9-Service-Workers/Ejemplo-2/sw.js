let version = "version 2";

self.addEventListener("install", e => {
    console.log("Instalando Service Worker...");
    caches.open(version).then(cache => {
        cache.add("index.html").then(res => {
            console.log("Informacion cacheada");
        }).catch(e => {
            console.log(e);
        })
    });
})

self.addEventListener("activate", () => {
    // Eliminar el cache si ya existe
    caches.keys().then(key => {
        return Promise.all(
            key.map(cache => {
                if (cache !== version) {
                    console.log("Cache antiguo, eliminado");
                    return caches.delete(cache);
                }
        }))
    })
    console.log("El Service Worker esta activo");
})

// self.addEventListener("error", (e) => {
// })

// self.addEventListener("fetch", (e) => {
//     e.respondWith(async function() {
//         const respuestaEnCache = await caches.match(e.request);
//         (respuestaEnCache) ? respuestaEnCache : e.request;
//     })
// })

self.addEventListener("fetch", (e) => {
    e.respondWith((async () => {
        const respuestaEnCache = await caches.match(e.request);
        if (respuestaEnCache) {
            return respuestaEnCache; // Devuelve la respuesta del cache si existe
        }

        // Si no está en caché, realiza la solicitud de la red
        const respuestaDeRed = await fetch(e.request);
        // Asegurate de que la respuesta es válida antes de almacenar en el cache
        if (respuestaDeRed && respuestaDeRed.status === 200) {
            const cache = await caches.open('nombre-del-cache'); // Cambia 'nombre-del-cache' por el nombre que quieras
            cache.put(e.request, respuestaDeRed.clone()); // Almacena una copia en el cache
        }
        return respuestaDeRed; // Devuelve la respuesta de la red
    })());
});

// self.addEventListener("message", (e) => {
//     console.log("Mensaje recibido del Navegador:");
//     console.log(e.data);
//     e.source.postMessage("Hola brother");
// })

