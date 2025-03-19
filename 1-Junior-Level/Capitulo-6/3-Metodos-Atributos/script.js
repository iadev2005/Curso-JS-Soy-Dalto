/**
 * Métodos para Definir, Obtener y Eliminar valores de atributos
 * - setAttribute() - Modifica el valor de un atributo
 * - getAttribute() - Obtiene el valor de un atributo
 * - removeAttribute() - Remueve el valor de un atributo
 */

const rangoEdad = document.querySelector(`.rangoEdad`);
/* Escribiendo el valor del atributo antes de cambiarlo */
document.writeln(rangoEdad.getAttribute("type"));
rangoEdad.setAttribute("type", "text");
/* y finalmente podemos remover el atributo */
rangoEdad.removeAttribute("type");