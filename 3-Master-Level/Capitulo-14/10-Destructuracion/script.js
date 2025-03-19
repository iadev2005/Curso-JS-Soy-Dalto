// Es como desempaquetar y empaquetar datos en Python
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

a = 1;
b = 3;
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

// Incluso lo podemos mezclar con rest
let rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]

// Tambien se pueden desestructurar objetos
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid',
    profesion: 'Desarrollador'
};

// Desestructuración combinada con rest
const { nombre, edad, ...resto } = persona;

console.log(nombre); // "Juan"
console.log(edad);   // 30
console.log(resto);  // { ciudad: "Madrid", profesion: "Desarrollador" }

// Una función para desestructurar arreglos:
function procesarNumeros([primero, segundo, ...restoNumeros]) {
    console.log(`Primer número: ${primero}`);
    console.log(`Segundo número: ${segundo}`);
    
    // Imprimir el resto de los números
    console.log('Resto de números:', restoNumeros);
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];

procesarNumeros(numeros);

// Una función para desestructurar objetos:
function obtenerDatosPersona({ nombre, edad, ...resto }) {
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    
    // Imprimir el resto de propiedades
    console.log('Otras propiedades:', resto);
}

// Ejemplo de uso
const personaEjm = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid',
    profesion: 'Desarrollador'
};

obtenerDatosPersona(personaEjm);