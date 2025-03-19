/**
 * Propiedades de Siblings (hermanos)
 * - nextSibling
 * - previosSibling
 * - nextElementSibling
 * - previousElementSibling
 */

/* En este caso, parrafo y titulo son hermanos */

const contenedor = document.querySelector(`.contenedor`);
const selector = document.querySelector(`.subtitulo`);

/* Como siempre en general se trabaja con element */

/* Esto es interesante, pero dependiendo de como imprimimos se muestre la info de cierta manera */
document.writeln(selector.previousElementSibling);

document.writeln(`El hermano siguiente de ${selector} es ${selector.nextElementSibling}`);

console.log(selector.previousElementSibling);
console.log(selector.nextElementSibling);