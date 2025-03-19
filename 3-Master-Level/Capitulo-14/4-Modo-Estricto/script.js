/**
 * Modo Estricto ("use strict")
 * - Convierte errores de JavaScript en excepciones
 * - Mejora la optimizacion de  errores y consigue mejores tiempos de ejecucion
 * - Evita sintaxis usadas en anteriores a ES6
 * - No permite que el programador realiza una "mala sintaxis"
 * - Variables declaradas
 * - Modificar propiedades (defineProperty() y writeable)
 * - Agregar propiedades
 * - No se puede agregar propiedades a un String
 * - No existen las multiples variables
 * - Delete en objetos o variables
 * - Las palabras reservadas no pueden ser usadas como variables
 * - Cambia el This
 * - Numeros Octales con una "o" adelante y no existe with
 * - Arguments y Eval no pueden ser variables
 */

// Es buena práctica usar el modo estricto por defecto
// nombre = "Ignacio" 
// Estaria mal ya que no definimos el alcance de la variable, en el modo estricto esto se toma en cuenta

// Si queremos usarlo de manera global (no en un bloque puntual) usamos:

"use strict";
// Esto es un error
// nombre = "Ignacio";
let nombre = "Ignacio";
console.log(nombre);

const objecto = {};
Object.defineProperty(objecto, "nombre",{value: "pedro", writable: false});
// No se podra hacer el cambio, ya que le asigmaos la propiedad writable: false para que solo sea de lectura
// objecto.nombre = "roberto";

// Con esto prohibimos que se definan nuevas propiedades
// Object.preventExtensions(objecto);
objecto.apellido = "Aliendres";

// Con el modo estricto no se pueden añadirle propiedades a un string (tampoco por defecto, pero en el modo estricto nos salta una excepción)
// const str = "Ignacio";
// str.canal = "iadev";
// console.log(str);

// function hablar (texto, texto) {
//     console.log(texto);
// }

// Sin el modo estricto podriamos llamar a la funcion y nos devolveria undefined (ya que toma el último parametro, y como solo se definio el primero el segundo esta indefenido), con el modo estricto ni siquiera se puede llamar a la funcion
// hablar("pedro");

// A diferencia del modo normal, en el modo estricto no se pueden eliminar variables ni funciones, solo podemos eliminar propiedades
// let variable = "Soy invencible";
// El compilador directamente nos idce que no podemos eliminarla
// delete variable;
// console.log(variable);

const carro = {
    marca : "ford",
    color : "negro"
}

delete carro.marca;
// Imprimira undefined
console.log(carro.marca);

// En el modo estricto las palabras reservadas no se pueden usar como variables
// Esto no se puede
// let package = "pedro";

// Esto es lo de this contextual que aprendi en Java normal

// class Persona {
//     constructor() {
//         this.nombre = "pedro";
//         this.saludar = function() {
//             console.log("Hola " + this.nombre);
//         }
//     }
// }

// let persona = new Persona();
// persona.saludar();

// Así se imprime un octal con el modo estricto
// console.log(o094);

// Modo estricto local
function modoEstricto() {
    "use strict"; // Solo sera valido dentro de la función (debe estar al principio de la función)
    // a = 2;
    // b = 3;
    let a = 3;
    let b = 2;
    return a+b;
}
modoEstricto();
// Arguments y Eval no pueden ser variables
// let arguments = "hola";
// let eval = "adios";

// Por los momentos esto se esta empezando a parecer más a Java normal
console.log(objecto);