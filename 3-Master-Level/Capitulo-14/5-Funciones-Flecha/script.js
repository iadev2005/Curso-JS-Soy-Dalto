/**
 * Funciones Flecha
 * - ¿Por qué aparecieron?
 * - Si solo hay una expresion la retornan
 * - Parentesis opcionales ante un solo parametro (sin parametros se requiere parentesis)
 * - No son adecuadas para ser usadas como métodos y no pueden ser usadas como constructores
 * - Retornan literales si su cuerpo esta entre ()
 * - This Contextual (No tienen propio this, sino que toman el de la función que lo envuelve)
 * - Las reglas de modo estricto aplicadas a This, son ignoradas
 * - Función flecha invocada a través de los metodos call, apply y bind
 * - No tienen objeto Arguments
 * - No tienen propiedad del prototipo prototype
 * - No se puede usar Yield (por ende no se pueden usar como funciones)
 * - No puede contener saltos de linea entre sus parametros y su flecha
 */

"use strict";

// Estructura
const nombreFuncion = () => {
    console.log("Accion");
}

// Si solo hay una linea de codigo se puede retornar de manera directa
const suma = (a, b) => a + b;
let resultado = suma(2,3);
console.log(resultado);

// Los parentesis son opcionales si hay un solo parámetro
const saludo = nombre => `Hola ${nombre}`;
console.log(saludo("Jose"));

// Esto ya lo vimos en capitulos anteriores, no son buenas para metodos ni constructores (en general nada que tenga que ver con clases)


const objeto = {
    nombre : "Ignacio",
    // EL this esta haciendo referencia al objeto que esta llamando al objeto, en este caso window
    saludar : ()=> {console.log(`Hola ${this.nombre}`)}
}

window.nombre = "Ignacio";

// Pondra undefined a menos que definamos window
objeto.saludar();

// En este contexto las funciones normales funcionan mucho mejor
const objeto2 = {
    nombre : "Pedro",
    saludar : function() {console.log(`Hola ${this.nombre}`)}
}
objeto2.saludar();

// No usar funciones flecha ni para constructores, ni para métodos

// NOTA: Si usamos this fuera de cualquier función siempre es window
console.log(this);

// Como estamos en el modo estricto esto fallara
// this.nombre = "ignacio";
function saludar() {
    console.log(`Hola ${this.nombre}`)
}
// Hay un acortador en JS que si la propiedad es igual al valor basta con poner solo el nombre de la propiedad
const obj = {
    nombre: "Juan",
    saludar
    // saludar: saludar
}
// Como ahora si tiene contexto de this la salida será la esperada
obj.saludar();

// Todo se iria a la mrd si usamos una función flecha en el objeto, lo importante es entender la referencia que esta haciendo el this (que es sencillo, puesto que ya vi a Java normal)