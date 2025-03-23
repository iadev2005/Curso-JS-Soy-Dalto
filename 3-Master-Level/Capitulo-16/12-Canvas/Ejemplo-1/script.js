/**
 * Canvas
 * - strokeRect
 * - strokeStyle
 * - fillRect
 * - lineWidth
 * - moveTo
 * - lineTo
 * - closePath
 * - beginPath
 */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// Grosor de los bordes
ctx.lineWidth = "6";
// Color del rectangulo
ctx.strokeStyle = "#48e";
// Cambia el color del relleno
ctx.fillStyle = "#26a";
// x, y, width y height (DIbuja un rectangulo en una posicion con su ancho y alto)
ctx.strokeRect(30, 50, 400, 200);
// Relleno
ctx.fillRect(10, 20, 400, 200);
// Para trazar una linea (se necesitan dos puntos) e indicarle que haga la linea
ctx.lineTo(100, 300);
ctx.lineTo(120, 350);
ctx.stroke();
// Y cerramos la línea
ctx.closePath();
// Y empezamos otra
ctx.beginPath();
// Un circulo
ctx.arc(120,150,100,10,40);
ctx.stroke();