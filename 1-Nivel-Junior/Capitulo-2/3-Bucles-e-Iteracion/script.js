/* Hay 5 principales tipos de bucle: */
/* while, do while, for, for in y for of */

/* Dado un número calcular la cantidad de dígitos */

let n = prompt(`Ingrese un numero: `);
n = parseInt(n);
let acumulator = 0;

while(n>=1) {
    acumulator++;
    n= n/10;
}

document.writeln("Cantidad de digitos: " + acumulator)