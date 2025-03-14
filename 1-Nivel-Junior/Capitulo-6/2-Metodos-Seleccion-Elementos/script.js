/**
 * Document - Métodos de Selección de Elementos
 * - getElementById() - Selecciona un elemento por ID
 * - querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores
 * - querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores
 */

let parrafo = document.getElementById("parrafo");
/* Señala que tipo de objeto es en HTML, en este caso un párrafo */
document.writeln(parrafo);

/* Si quisieramos seleccionar todos los elementos con cierta etiqueta */
parrafo = document.getElementsByTagName("p")
/* Nos señala que es una coleccion HTML */
document.writeln(parrafo);
/* Esto no es un array, es una lista, pero igaul podemos acceder por el índice para acceder al p que nos convenga */
document.writeln(parrafo[0]);

/* Para seleccionar por clases se usa querySelector() */
/* Como es una clase inicia en . */
parrafo = document.querySelector(".clase");
/* Esto no nos devuelve una lista */
document.writeln(parrafo);

/* NOTA: El document.getElementByID es más óptimo cuando se trata de seleccionar por ID */

/* Para seleccionar todos los elementos de una clase se usa querySelectorAll() */
parrafo = document.querySelectorAll(".clase");
/* Esto nos devuelve un node list (no es un array), es una lista de nodos */
document.writeln(parrafo);
/* Lo bueno es que aún podemos acceder a los elementos por su índice */
document.writeln(parrafo[0]);