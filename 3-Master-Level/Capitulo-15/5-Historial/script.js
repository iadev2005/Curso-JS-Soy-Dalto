/**
 * Historial
 * - back() - Vuelve atras
 * - forward() - Va hacia adelante
 * - Tamaño del historial
 * - go() - Va al sitio indicado con un numero relativo
 * - pushState() - Modifica la URL y conserva
 * - propiedad state y evento popstate
 * - replaceState - Modifica la URL y no la conserva
 */

"use strict";

console.log(history);

// Back es como la felcha de retroceso del navegador, y Forward es la de siguiente

history.back();
history.forward();
// Length muestra la cantidad de ventanas que se abrieron en el historial
history.length;
// go() tiene como parametro un numero, que dependiendo el historial nos lleva a esa n sección

// Si no le damos parametros simplemente nos recarga la pagina
// history.go();

console.log(window.location.href);
history.pushState({nombre : "pedro"}, "titulo", "?jaja");
// Se lo añadio a location.href
console.log(window.location.href);
// Y al estado de la pagina
console.log(history.state);

addEventListener("popstate", (e) => {
    console.log(e.state);
})

// La diferencia clave es que replaceState modifica el estado actual en lugar de crear uno nuevo.
history.replaceState({nombre:"Ignacio"},"titulo2", "lol");