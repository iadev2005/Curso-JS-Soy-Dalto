/**
 * Obtención y modificación de childs (hijos)
 * - firstChild
 * - lastChild
 * - firstElementChild
 * - lastElementChild
 * - childNodes
 * - children
 */

const container = document.querySelector(`.contenedor`);
let primerHijo = container.firstChild;
/* Devuelve texto por los espacios en blanco... */
console.log(primerHijo);
let ultimoHijo = container.lastChild;
console.log(ultimoHijo)

/* Para que no suceda esto se usa element */
primerHijo = container.firstElementChild;
console.log(primerHijo);
ultimoHijo = container.lastElementChild;
console.log(ultimoHijo);

/* childNodes nos devuelve todos los nodos hijos */

let hijos = container.childNodes;
console.log(hijos);
/* En el inspector se puede ver que pasa con los índices en esta lista */
/**
0: #text "\n        "​
1: <h2>​
2: #text "\n        "​
3: <h4>​
4: #text "\n        "​
5: <p>​
6: #text "\n  
 */
/* No es un array, pero como es un objeto igual lo podemos recorrer */
hijos.forEach(hijo => console.log(hijo));

/* children es lo mismo que childNodes, solo que incorpora puros elementos */
hijos = container.children;
console.log(hijos);
/* Como esto es un HTML colection no se le puede hacer un forEach */
// for (let hijo in hijos) {
//     console.log(`Indice: ${hijo}`);
//     /* No obtuvimos los elementos como quisieramos */
//     console.log(`Valor: ${hijos[hijo]}`);
// }

for (let hijo of hijos) {
    /* Ahora si esta en el formato correcto */
    console.log(`Valor: ${hijo}`);
}