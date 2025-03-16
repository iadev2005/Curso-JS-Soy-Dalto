/**
 * Eventos del Mouse
 * - click - Ocurre con un click
 * - dblclick - Ocurre con un doble click
 * - mouseover - Ocurre cuando el puntero se mueve sobre un elemntos o sobre uno de sus hijos
 * - mouseout - Ocurre cuando se mueve el puntero de un elemento o de sus elementos secundarios
 * --- otros ---
 * - contextmenu - ocurre con un click en el boton derecho en un elemento para abrir un menu contextual
 * - mouseenter - ocurre con un click en el boton derecho en un elemento para abrir un menu contextual
 * - mouseleave - ocurre cuando el puntero se mueve fuera de un elemento
 * - mousedown - Ocurre cuando un usuario aprieta un boton del mouse sobre un elemento
 * - mouseup - ocurre cuando un usuario suelta un boton del mouse
 * - mousemove - ocurre cuando el puntero se mueve mientras esta sobre un elemento
 */

const button = document.querySelector(`.button`);
const contenedor1 = document.querySelector(`.contenedor-1`);
const contenedor2 = document.querySelector(`.contenedor-2`);

/* Tiene que ser doble click */
// button.addEventListener(`dblclick`, (e) => {
//     alert(`Di click al botón`);
// })

/* Cuando el mouse esta por encima del elemento */
// button.addEventListener(`mouseover`, (e) => {
//     alert(`Pase el mouse por encima de botón`);
// })

/* Cuando el mouse esta por fuera del elemento (primero debe pasar por el boton) */
// button.addEventListener(`mouseout`, (e) => {
//     alert(`Pase el mouse por fuera del botón (por lo tanto en un container)`);
// })

// button.addEventListener(`contextmenu`, (e) => {
//     alert(`Le di click derecho al botón`);
// })

/* Mientras el mouse se mueve sobre el elemento indicado */
// button.addEventListener(`mousemove`, (e) => {
//     alert(`Me estoy moviendo en el botón`);
// })

/* mouseup es lo mismo, solo que esta pensado para Internet Explorer */

/* Leave es solo contrario, es cuando no esta sobre el boton (primero hay que clickearlo, al menos que estemos usando el container obviamente) */
// button.addEventListener(`mouseleave`, (e) => {
//     alert(`No me estoy moviendo en el botón`);
// })

/* Con mouse down si clickeamos y luego desclickeamos fuera del botón se muestra el mensaje (cosa que no pasa con click) */
button.addEventListener(`mousedown`, (e) => {
    alert(`Clickie el boton y puedo poner el mouse por fuera`);
})
