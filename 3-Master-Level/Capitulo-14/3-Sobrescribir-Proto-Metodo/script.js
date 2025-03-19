class Objeto {
    constructor() {};
    hablar(){
        console.log("Hola");
    }
}

const objeto = new Objeto();

// objeto.hablar = ()=> {
//     console.log("Modificado afuera");
// }

// Se imprimira el método sobre-escrito en la función flecha, ya que los métodos externos, o últimos que se definieron tienen prioridad. Claro primero se ejecuta el de la clase, luego el de la función flecha y como se ejecuto de ultimo es el que se va a mostrar

// Ojo, como tal no se esta modificando al objeto, solo se esta volviendo a escribir, para modificarlo tendriamos que hacer lo siguiente

// Supongo que esto es lo más cercano que tenemos a una clase abstracta en JS
objeto.__proto__.hablar = () => {
    console.log("Modificado afuera");
}
console.log(objeto);
objeto.hablar();

// Si queremos que array herede especificamente el prototipo hablar de la clase objeto hacemos lo siguiente (esto se parece a interfaces)
let array = [];
array.__proto__ = objeto;
// Toma al modificado (el ultima que encuentra)
array.hablar();

// Toma al original, ya que accedimos al prototipo del modificado
// solo si la función no fue redefinida con .__proto__
// array.__proto__ = objeto.__proto__;
// array.hablar();