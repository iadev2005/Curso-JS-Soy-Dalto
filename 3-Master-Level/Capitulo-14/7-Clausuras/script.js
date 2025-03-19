// Las clausuras son funciones que retornan otras funciones
"strict mode";
// const saludar = nombre => {
//     return function() {
//         console.log(nombre);
//     }
// }

// Volvimos a saludo una funcion de una manera indirecta
// let saludo = saludar("Ignacio");
// saludo();

// Un uso práctico

const texto = document.querySelector(".texto");
const t12 = document.querySelector(".t12");
const t14 = document.querySelector(".t14");
const t16 = document.querySelector(".t16");

// Sin clausula
// const cambiarTamano = tamano => {
//     texto.style.fontSize = `${tamano}px`;
// }

// t12.addEventListener("click", () => {
//     cambiarTamano(12)
// });

// t14.addEventListener("click", () => {
//     cambiarTamano(14)
// });

// t16.addEventListener("click", () => {
//     cambiarTamano(16)
// });

// Con clausula
const cambiarTamano = tamano => {
    return () => {
        texto.style.fontSize = `${tamano}px`;
    }
}

px12 = cambiarTamano(12);
px14 = cambiarTamano(14);
px16 = cambiarTamano(16);

t12.addEventListener("click", px12);

t14.addEventListener("click", px14);

t16.addEventListener("click", px16);