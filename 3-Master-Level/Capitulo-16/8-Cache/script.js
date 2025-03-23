"use strict";
/**
 * Cache
 * - Usos
 * - Cache.add(request) - Toma una URL, la recupera y agrega el objeto de respuesta resultante a la cache dada. Esto es funcionalmente equivalente a llamar fetch() y luego usar put() para agregar los resultados a la cache
 * - Cache.addAll(request) - Toma una matriz de URL, las recupera y agrega los objetos de respuesta resultantes a la cache dada
 * - Cache.match(request, options) - Devuelve un Promise que se resuelve con la respuesta asociada con la primera solicitud coincidente en el objeto almacenado
 * - Cache.matchAll(request, options) - Devuelve un Promise que se resuelve en una matriz de todas las solicitudes coincidentes en el objeto almacenado
 * - Cache.put(request, response) - Toma tanto una solicitud como su respuesta y la agrega a la cache dada
 * - Cache.delete(request, options) - Encuentra la entrada del objeto cuya clave es la solicitud, devolviendo un Promise que resuelve true si el objeto se encuentra y se elimina una entrada coincidente. Si no se encuentra ninguna entrada, la promesa se resuelve en false
 *  - Cache.keys(request, options) - Devuelve un Promise que se resuelve en una matriz de keys de los objetos almacenados
 */
// Es bastante semejante a indexedDB, esto lo abre, y si no existe lo crea. Tambień se le puede considerar un almacen de objetos
// caches.open("static-files");

// Como esto es una promesa accedemos con un then, y luego hacmos las repectivas operaciones con los datos ya disponibles

caches.open("static-files-2").then(cache => {
    console.log(cache);
    // Vamos a agregarle al cache el index.html
    // cache.add("index.html")
    // Para agregar varios
    cache.addAll(["index.html", "script.js"]);

    // match es como un querySelector, y matchAll es como un querySelectorAll

    cache.match("index.html").then(res => {
        console.log(res);
    })

    // Esto hara match a todos los index.html, y nos devolvera un array
    cache.matchAll("index.html").then(res => {
        console.log(res);
    })
})

caches.open("static-files").then(cache => {
    // fetch("index.html").then(res => {
    //     cache.put("index.html", res);
    // })

    // Es mejor hacer esto (incluso que usar put, ya que si el archivo empieza a usar menos recursos, se actualiza y el contenido almacenado en la cahe también usa menos recursos)
    cache.add("index.html");
    // Y bueno delete simplemente elimina el recurso
    // cache.delete("index.html");

    // keys es como mostrar toda la informacion
    cache.keys().then(res => {
        console.log(res);
    })
})