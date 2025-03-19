/**
 * Operador Condicional (Ternario)
 * - Definicion
 * - Sintaxis
 */

// Condicional estandar
let edad = 17;
// if (edad > 18) console.log("Es mayor de edad");
// else console.log("Es menor de edad");

// El ? es lo que sucederia si fuera verdadero
// El : es el de-lo-contrario (else)

// (edad > 18) ? console.log("Es mayor de edad") : console.log("Es menor de edad");

// Si queremos separar por bloque varias acciones usariamos () y ,

(edad > 18) ? (console.log("Es mayor de edad"), console.log("Puede pasar")) : (console.log("Es menor de edad"), console.log("No puede pasar"));

// El operador ternario consume menos recursos (es más óptimo)