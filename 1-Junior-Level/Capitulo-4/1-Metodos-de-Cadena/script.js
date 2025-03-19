/**
 * - concat() - Junta dos o más cadenas y retorna una nueva
 * - startsWith() - Si una cadena termina con los carácteres de otra cadena, devuelve true, sino devuelve false
 * - includes() - Si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false
 * - indexOf() - Devuelve el índice del primer caracter de la cadena, si no existe, devuelve -1
 * - lastIndexOf() - Devuelve el último índice del primer caracter de la cadena, si no existe devuelve -1 
 * 
 * - padStart() [propuesta de estandar] - Rellena la cadena al principio con los caracteres deseados (el total de la longitud de la cadena es igual a los caracteres deseados)
 * - padEnd( )[propuesta de estandar] -Rellena la cadena al final con los caracteres deseados (el total de la longitud de la cadena es igual a los caracteres deseados)
 * - repeat() - Devuelve la misma cadena pero repetida x veces
 * 
 * - split() - Divide la cadena como le pidamos
 * - substring() - Nos retorna un pedazo de la cadena que seleccionemos
 * - toLowerCase() - Convierte una cadena a minúscula
 * - toUpperCase() - Convierte una cadena a mayúscula
 * - toString() - Método que devuelve una cadena que representa al objeto especificado
 * - trim() - elimina los espacios en blanco al principio y al final de una cadena
 * - trimEnd() - elimina los espacios en blanco al final de una cadena
 * - trimStart() - elimina los espacios en blanco al comienzo de una cadena
 * - valueof() - retorna el valor primitivo de un objeto string
 */

/* Es curioso pero ambas instrucciones son equivalentes: */
/* let cadena = new String(`cadena de prueba`) */
let cadena = `cadena de prueba`;

/* Obviamente también podemos concatenar variables */
let resultado = cadena.concat(` se concateno`);
document.writeln(`<p>${resultado}</p>`);

document.writeln(`<p>${cadena} empieza con cadena: ${cadena.startsWith(`cadena`)}</p>`);

document.writeln(`<p>${cadena} termina con prueba: ${cadena.endsWith(`prueba`)}</p>`);

document.writeln(`<p>${cadena} tiene la sub-cadena "de": ${cadena.includes(`de`)}</p>`);

document.writeln(`<p>${cadena} tiene la palabra " de " comenzando en el índice: ${cadena.indexOf(` de `)}</p>`)

document.writeln(`<p>${cadena} tiene la palabra "de" terminando (es decir escrita por última vez) en el índice: ${cadena.lastIndexOf(`de`)}</p>`)

cadena = cadena.padStart(cadena.length+3 , "a");
document.writeln(`<p>Agregando caracteres iniciales a la cadena: ${cadena}</p>`)

cadena = cadena.padEnd(cadena.length+3 , "f");
document.writeln(`<p>Agregando caracteres finales a la cadena: ${cadena}</p>`)

cadena = cadena.repeat(2)
document.writeln(`<p>Repitiendo la cadena: ${cadena}</p>`)

let cadenaDividir ="Hola,como,estas";
resultado = cadenaDividir.split(",");
/* Esto es un array, donde cada posición la separa la "," */
document.writeln(`<p>${resultado[0]}</p>`);

cadena = "ABCDEFG";
/* Recorta la cadena desde x inidice hasta el n indice (sin incluirlo) */
resultado = cadena.substring(0,2);
document.writeln(`<p>${resultado}</p>`)

/* Convierte a minúsculas */
resultado = resultado.toLowerCase();
document.writeln(`<p>${resultado}</p>`);

/* Convierte a mayúsculas */
resultado = resultado.toUpperCase();
document.writeln(`<p>${resultado}</p>`);

/* El toString ya le hemos utilizado en múltiples ocasiones */

/* trim, trimStart y trimEnd son bastante descriptivos con lo que hacen, lo importante es que lo que cambia es el lenght de la cadena, no la cadena en sí */
cadena = `  El perro de la abuela `;
cadena = cadena.trim();
/* trim - elimina los espacios en blanco de ambos extremos (solo los extremos) */
document.writeln(`<p>Cadena después de trim: ${cadena.length}</p>`);

cadena = `  El perro de la abuela `;
cadena = cadena.trimStart();
/* trim - elimina los espacios en blanco de ambos extremos (solo los extremos) */
document.writeln(`<p>Cadena después de trimStart: ${cadena.length}</p>`);

cadena = `  El perro de la abuela `;
cadena = cadena.trimEnd();
/* trim - elimina los espacios en blanco de ambos extremos (solo los extremos) */
document.writeln(`<p>Cadena después de trimEnd: ${cadena.length}</p>`);