/**
 * Intersection Observer
 * - Qué es y para que sirve?
 * - IntersectionObserver()
 * - callback y options
 * - isIntersecting
 * - Configurar options
 * - Ejemplo de uso (Lazy Load)
 */

"use strict";

// const caja3 = document.querySelector(".caja-3")
const cajas = document.querySelectorAll(".caja")

const verifyVisibility = entries => {
    // Para ver la visibilidad de una sola caja
    // const entry = entries[0];
    // console.log(entry);
    // console.log(entry.isIntersecting);

    for (let entry of entries) {
        if (entry.isIntersecting) console.log("Se esta viendo la caja: " + entry.target.textContent)
    }
}

// root toma un elemento como referienca, por defecto es el viewport
// root margin pone un margen para que el elemento se vea antes en viewport
const options = {
    rootMargin : "60px",
    treshold: 0.5 // Cuanto necesita para que considere que se mostro el cuerpo completo (en este caso la mitad)
}

const observer = new IntersectionObserver(verifyVisibility, options);
// observer.observe(caja3);

// for (let caja in cajas) {
//     console.log(caja);
// }

for (let caja of cajas) {
    // console.log(caja);
    observer.observe(caja);
}