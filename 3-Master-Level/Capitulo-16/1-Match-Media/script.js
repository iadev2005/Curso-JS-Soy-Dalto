/**
 * matchMedia
 * - matchMedia()
 * - Propiedad match
 * - evento onchange
 * - ¿Cuándo debería usar esto?
 */

"use strict";

// matchMedia nos permite trabajar con responsive design, solo la recomiendan si es algo que no se puede hacer con css

// Dentro de los paréntesis va la mediaquerys
const mql = matchMedia("(max-width: 500px)");
const caja = document.querySelector(".caja");

// Con esto verificamos si entro en las dimensiones de la mediaquery especificada
// console.log(mql.matches);

// Change se ejecuta solo cuando el valor de mql.matches cambia
mql.addEventListener("change", () => {
    console.log("Resolucion cambiada");
    (mql.matches) ? caja.classList.replace("caja","responsive-caja") : caja.classList.replace("responsive-caja", "caja")
})

