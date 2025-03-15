/**
 * - screen - Devuelve una referencia al objeto de pantalla asociado con la ventana
 * - screenLeft - Devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla
 * - screenTop - Devuelve la distancia vertical entre el borde superior delnavegador y el borde superior de la pantalla
 * - scrollX - Devuelve el número de píxeles en los que el documento se desplaza horizontalemente
 * - scrollY - Devuelve el número de píxeles en los que el documento se desplaza verticalmente
 * - scroll() - Desplaza la venta a un lugar particular en el documento (con options y con posiciones)
 */

let screen = window.screen;
console.log(screen);
/* También podemos acceder a una propiedad en específico */
console.log(screen.availHeight);
document.writeln(screen);


/* Si vamos moviendo la ventana notamos los cambios */
screen = window.screenLeft;
console.log(screen);
document.writeln(screen);

screen = window.screenTop;
console.log(screen);
document.writeln(screen);

/* Devuelve la posición de los ejes en px */
let scroll = window.scrollX;
console.log("Scrool en x: " + scroll);

scroll = window.scrollY;
console.log("Scrool en y: " + scroll);

/* Acá damos coordenadas (x, y) para indicarle donde debe de estar el scroll() (Este es absoluto por cierto, hay otros relativos, pero no valen la pena), por cierto scroll y scrollTo son prácticamente iguales */
scroll = window.scroll(0,100);