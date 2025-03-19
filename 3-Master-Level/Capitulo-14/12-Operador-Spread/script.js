/**
 * Operador Spread (spread operator)
 * - Añadir arrays a otros arrays
 * - Concatenar arrays
 * - Como argumento rest
 */

"use strict";
let valor1 = "valor 1";
let valor2 = "valor 2";
let valor3 = "valor 3";
let array = ["valor1", "valor2", "valor3"];
console.log(valor1, valor2, valor3);

// Si quisieramos mostrar cada elemento del array pero de manera separada sin necesidad de desempaquetar podemos usar el operador spread ...

// ... Desarma el array
console.log(...array);

// Se puede usar para añadir arrays en otros arrays
let frutas1 = ["manzana", "pera", "banana"];
let frutas2 = ["kiwi", "naranja"];

// Hacer un push no sería efectivo ya que introduciría el otro array como si fuera un solo elemento
// frutas1.push(frutas2);

// Si quisieramos hacer esto con push tendriamos que hacer lo siguiente 
// frutas1.push(frutas2[0], frutas2[1]);
// E incluso con un for seguiría siendo ineficiente

// Entoncs lo más eficiente si seguiría siendo usar push, pero con el operador spread
frutas1.push(...frutas2);
console.log(...frutas1);

// También se pueden concatenar arrays
let frutas3 = [...frutas1, ...frutas2];
console.log(frutas3);

// Como argumento rest
const sumar = (num1, num2) => {
    console.log(num1 + num2);
}

array = [3,6];
// A diferencia de lo que vimos en el capitulo de parametros rest, esto es un argumento rest
// Es como pasarle array[0], array[1]
let resultado = sumar(...array);
console.log(resultado);

