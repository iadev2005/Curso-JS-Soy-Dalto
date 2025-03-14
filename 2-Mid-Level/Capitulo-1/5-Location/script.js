/**
 * Location
 * - window.location.href - Devuelve el href (URL) de la página actual
 * - window.location.hostname - Devuelve el nombre de dominio del servidor web
 * - window.location.pathname - Devuelve la ruta y el nombre de archivo de la página actual
 * - window.location.protocol - Devuelve el protocolo web utilizado (http: o https:)
 * - window.location.assign() - Carga un nuevo documento
 */

/* Esto suele ser útil para Node.js */

/* Si estamos en un servidor nos devuelve el nombre de un servidor */
const href = window.location.href;
document.writeln(`<p>${href}</p>`);

const host = window.location.hostname;
document.writeln(`<p>${host}</p>`);

const path = window.location.pathname;
document.writeln(`<p>${path}</p>`);

const protocol = window.location.protocol;
document.writeln(`<p>${protocol}</p>`);

// const assign = window.location.assign("https://youtube.com");
// document.writeln(`<p>${assign}</p>`);