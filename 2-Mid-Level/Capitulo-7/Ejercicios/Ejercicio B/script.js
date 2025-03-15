/**
 * Problema B
 * - Mostrar suficientes datos para conoces el sitio web
 */

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `<p>Protocolo: <strong>${protocol}</strong></p>`;
html += `<p>Hostname: <strong>${hostname}</strong></p>`;
html += `<p>Pathname: <strong>${pathname}</strong></p>`;
html += `<p>URL Completa <strong>${href}</strong></p>`;

document.writeln(html);