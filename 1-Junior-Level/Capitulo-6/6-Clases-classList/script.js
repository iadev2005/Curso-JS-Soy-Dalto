/**
 * Clases, classList y Métodos de classList
 * - Definición y usos
 * - add() - Añade una clase
 * - remove() - Remueve una clase
 * - item() - Devuelve la clase del índice especifcado
 * - contains() - Verifica si ese elemento posee o no, la clase especificada
 * -  replace() - Reemplaza una clase por otra
 * - toggle() - si no tiene la clase especificada, la agrega si ya la tiene, la elimina
 */

const titulo = document.querySelector(".titulo");
/* Agrega la clase grande */
titulo.classList.add(`grande`);
titulo.classList.remove(`grande`);

let valor = titulo.classList.item(1);
document.writeln(`<p>El nombre de la segunda clase del elemento es ${valor}</p>`);

valor= titulo.classList.contains("titulo-prueba");
if (valor) {
    document.writeln(`<p>Efectivamente ${titulo.classList.item(1)} es el nombre de la clase</p>`)
} else {
    document.writeln(`<p>No ${titulo.classList.item(1)}, no es el nombre de la clase</p>`)
}

/* Podriamos usar lo anterior para validar, y depsueś ver si sacamos o metemos, por ejemplo, si no tiene la clase agregala, de lo contrario borrala, sin embarga para eso tenemos a toogle() */

/* En este caso como tiene la clase la elimina */
// titulo.classList.toggle("titulo-prueba");

/* Hay un segundo parámetro bool, si este parámetro es true, si la tiene no la saca. si no la tiene la pone. Si este parámetro es false, si no la tiene la deja igual, si la tiene la saca */

/* En este caso ya la tenía, pero igual la deja */
titulo.classList.toggle("titulo-prueba", true);

/* Para reemplzar una clase por otra se usa replace */
valor = titulo.classList.replace("titulo-prueba", "azul");