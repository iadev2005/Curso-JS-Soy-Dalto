/**
 * Sentencia Switch
 * - Sintaxis y clausula case
 * - break
 * - default
 */

/* Sentencia general */
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let frutas = ["Banana", "Pera", "Manzana"]
let expr = frutas[0];

switch (expr) {
    case "Banana":
        console.log("Esta fruta es amarilla")
        break; // Si no se pone el break se ejecuta las demás
    case "Pera":
        console.log("Esta fruta es verde")
        break;
    case "Manzana":
        console.log("Esta fruta es roja")
        break
    default:
        console.log("No es ninguna");
        break;
}

// Normalmente if - else if tiene mejor rendimiento, de hecho, muchos no lo conocen pero se puden poner condicionales en una sola línea (si solo hay una instruccion)

// Esto es más óptimo
if (expr == "Banana") console.log("Esta fruta es amarilla");
else if (expr == "Pera") console.log("Esta fruta es verde");
else if (expr == "Manzana") console.log("Esta fruta es roja");
else console.log("No es ninguna")