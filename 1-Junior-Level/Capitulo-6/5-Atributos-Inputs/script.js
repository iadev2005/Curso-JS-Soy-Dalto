/**
 * Atributos de Inputs
 * - className
 * - value
 * - type
 * - accept
 * - form
 * - minLength
 * - placeholder
 * - required
 * - style
 */

let input = document.querySelector(".input-normal");
document.writeln(`<p>${input}</p>`);
/* Escribe el nombre de la clase */
document.writeln(`<p>${input.className}</p>`);
/* Escribe lo que esta dentro del input */
document.writeln(`<p>${input.value}</p>`); /* Se usa bastante */
/* Puede cambiar el tipo de input */
document.writeln(`<p>${input.type=`file`}</p>`);
input.accept = "image/png"; /* Solo permite este formato */

input = document.querySelector(".input-normal-2");
document.writeln(input)
input.minLength = 4;

input.placeholder = `Que paso bobo?`;
/* Se tiene que poner el campo obligatoriamente */
input.required = "true";

input = document.querySelector(".titulo");
input.style.color = "red";