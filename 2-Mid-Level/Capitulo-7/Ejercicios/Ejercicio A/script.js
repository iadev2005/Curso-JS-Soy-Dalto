/**
 * Problema A
 * - Al menos debe ser full HD
 * - Preguntarle si esta seguro al momento de comprar
 */

const alto = window.screen.height;
const ancho = window.screen.width;
comprar = confirm(`El alto es: ${alto}, y el ancho es: ${ancho}`);

if (comprar) {
    alert(`Compra realizada exitosamente`);
} else {
    alert(`Compra cancelada`);
}
