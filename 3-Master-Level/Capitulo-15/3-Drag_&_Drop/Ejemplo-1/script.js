/**
 * Drag & Drop
 * - Eventos del objeto
 *      - dragstart
 *      - drag
 *      - dragend
 * - Eventos de zona
 *      - dragenter
 *      - dragover
 *      - drop
 *      - dragleave
 * - Propiedad dataTransfer
 *      - getData()
 *      - setData()
 * - Ejemplo de uso (Texturizador)
 */

"use strict";
const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");

// El objeto dataTransfer permite la interacción entre el objeto arrastrado y el elemento que contendra el arraste

// Con esto le pasariamos una clase por ejemplo
// circulo.addEventListener("dragstart", (e) => {
//     e.dataTransfer.setData("clase", "circulo");
//     console.log(e.dataTransfer.getData("clase"))
// });

circulo.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("clase", e.target.className);
});

// circulo.addEventListener("dragstart", () =>console.log("dragstart"));
// circulo.addEventListener("drag", () =>console.log("drag"));
// circulo.addEventListener("dragend", () =>console.log("dragend"));

// En el momento que toco inicialmente el circulo es dragstart
// Todo el tiempo donde mantego el click presionado para arrastrarlo es el drag
// Y cuando finalmente suelto es el dragend

// El evento "dragenter" se dispara cuando un elemento arrastrado entra en un área de drop
// El evento "dragover" se dispara continuamente mientras el elemento arrastrado se encuentra sobre el área de drop
// El evento "drop" se dispara cuando el usuario suelta el elemento arrastrado en el área de drop
// El evento "dragleave" se dispara cuando el elemento arrastrado sale del área de drop
rectangulo.addEventListener("dragenter", () =>console.log("dragenter"));
// rectangulo.addEventListener("dragover", () =>console.log("dragover"));
rectangulo.addEventListener("dragover", (event) => {
    // Para permitir la acción de drop, se debe llamar a event.preventDefault()
    event.preventDefault();
    console.log("dragover");
});
// rectangulo.addEventListener("drop", () =>console.log("drop"));
rectangulo.addEventListener("drop", (e) =>console.log(e.dataTransfer.getData("clase")));
rectangulo.addEventListener("dragleave", () =>console.log("dragleave"));