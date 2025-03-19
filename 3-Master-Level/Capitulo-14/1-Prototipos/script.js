/**
 * Prototipos
 * - Definicion
 * - Prototype Chain
 * - Prototype Object
 * - Propiedad proto
 */

let objeto = {
    "propiedad" : "datos"
}

// console.log(objeto);

// Todos los objetos tienen el __proto__ : Object
// Incluso las cadenas tienen el prototipo Object
// Esto porque en JS todos los tipos de datos son objetos

// Como nosotros en ningún momento hicimos esta asignación se puede considerar que estamos heredando el prototipo Object

// Se heredan por lo general dos protipos, el object y el del tipo de dato, string hereda el prototipo string y el prototipo object
console.log(objeto.__proto__);

let cadena = "cadena";
let numero = 7;

// Cada uno tiene un prototipo de su respectiva clase, y a su vez su clase tiene el prototipo object
console.log(cadena.__proto__);
console.log(numero.__proto__);
console.log(cadena.__proto__.__proto__);
console.log(numero.__proto__.__proto__);

// Ni null ni undefined tienen prototipo

// Cuando creamos una funcion tambien se crea el prototipo de la funcion
let funcion = function(){};
// console.log(funcion.__proto__);

// Se usa __proto__ para acceder a los prototipos que ya vienen por default
// Para acceder a los que creamos nosotros usamos .prototype y __proto__
console.log(funcion.prototype.__proto__);