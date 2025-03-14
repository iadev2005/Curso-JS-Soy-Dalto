/**
 * Obtención y Modificación de Elementos
 * - textContent - Devuelve el texto de cualquier nodo
 * - innerHTML - Devuelve el contenido HTML de un elemento
 * - outerHTML - Devuelve el codigo HTML competo del elemento
 */

const titulo = document.querySelector(`.titulo`);

/* Guarda el hidden content */
let resultado = titulo.textContent;
/* Solo devuelve el contenido, no el contenido HTML */
document.writeln(`${resultado}`);

resultado = titulo.innerHTML;
/* Devuelve el HTML */
document.writeln(`${resultado}`);

resultado = titulo.outerHTML;
/* Devuelve el HTML y su código */
document.writeln(`${resultado}`);

/* Acá si se notan las diferencias */
alert(titulo.textContent);
alert(titulo.innerHTML); /* Solo muestra las etiquetas principales */
alert(titulo.outerHTML); /* Muestra todo su html */