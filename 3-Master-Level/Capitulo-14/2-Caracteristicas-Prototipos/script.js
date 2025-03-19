/**
 * Caracteristicas
 * - Un prototipo definido por nosotros mismos es mutable
 * - Es en si mismo un objeto, asi como otros
 * - Tiene una existencia física en la memoria
 * - Puede ser modificado y llamado
 * - Puede ser visto como un modelo ejemplar de una familia objeto
 * - Un objeto hereda propiedades (valores y métodos) de su prototipo
 */

let array = ["Pedro", "Jose"];
// Podemos consultar todos los métodos de un tipo de dato viendo su prototipo
array.reverse();
console.log(array);

// reverse no es un metodo propio del array como estamos viendo en consoloa, solo es un metodo alojado en el prototipo del array

// Para verlo más claro vamos a crear una clase

class Objeto {
    constructor() {};
    hablar(){
        console.log("Hola");
    }
}

let objeto = new Objeto();
console.log(objeto);