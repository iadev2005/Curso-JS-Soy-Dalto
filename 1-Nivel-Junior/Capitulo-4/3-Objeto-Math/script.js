/**
 * Math - Básico
 * 
 * ___Métodos___
 * - sqrt(x) - Devuelve la raíz cuadrada de x.
 * - cbrt(x) - Devuelve la raíz cúbica de x.
 * - max(...values) - Devuelve el valor máximo de los argumentos proporcionados.
 * - min(...values) - Devuelve el valor mínimo de los argumentos proporcionados.
 * - random() - Devuelve un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusive).
 * - round(x) - Redondea x al entero más cercano.
 * - fround(x) - Devuelve la representación de punto flotante de precisión simple de x.
 * - floor(x) - Devuelve el mayor entero menor o igual a x.
 * - trunc(x) - Elimina la parte decimal de x, dejando solo la parte entera.
 * 
 * ___Propiedades___
 * - PI - La constante π (pi), aproximadamente 3.14159.
 * - SQRT1_2 - La raíz cuadrada de 1/2, aproximadamente 0.70711.
 * - SQRT2 - La raíz cuadrada de 2, aproximadamente 1.41421.
 * 
 * - E - La base del logaritmo natural (e), aproximadamente 2.71828.
 * - LN2 - El logaritmo natural de 2, aproximadamente 0.69315.
 * - LN10 - El logaritmo natural de 10, aproximadamente 2.30259.
 * - LOG2E - El logaritmo en base 2 de e, aproximadamente 1.44269.
 * - LOG10E - El logaritmo en base 10 de e, aproximadamente 0.43429.
 */

/* Nada complejo, si quremos sacar una raiz cúbica por ejemplo podemos hacer los siguiente: */
let numero = Math.cbrt(27);
document.writeln(`<p>La raíz cubica de 27 es: ${numero}</p>`)

/* y así con todo... */

numero = Math.max(27, 22, 442, 32, 9);
document.writeln(`<p>El numero más grande es ${numero}</p>`)

/* min es lo mismo pero devuelve el mas pequeño */

/* random devuelve un número aleatoío en un rango de números del 0 al 1 (casi siempre se usa con round */
numero = Math.random()*100;
numero = Math.round(numero)
document.writeln(`<p>Número random entre 0-100 ${numero}</p>`)

/* Si quisieramos excluir algún valor extremo para usar random se suele usar esta combinación */
numero = Math.random()*99;
numero = Math.floor(numero+1);
document.writeln(`<p>Número random entre 1-99 ${numero}</p>`)

/* trunc saca directamente la parte decimal del número */
numero = Math.trunc(9.7);
document.writeln(`<p>Truncando 9.7: ${numero}</p>`)

numero = Math.PI;
document.writeln(`<p>El valor de pi es: ${numero}</p>`)
