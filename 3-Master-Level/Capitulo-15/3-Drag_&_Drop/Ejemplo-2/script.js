"use strict";
const zona = document.querySelector(".zona");
const texturas = document.querySelector(".texturas");
zona.addEventListener("dragover", (e) => {
    e.preventDefault();
})
zona.addEventListener("drop", (e) => {
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url("textura${n}.jpg")`;
})

const transferirTextura = (n, e) => {
    e.dataTransfer.setData("textura", n);
}

for (let i=1; i<=texturas.children.length; i++) {
    console.log(i);
    document.querySelector(`.textura-${i}`).addEventListener("dragstart", (e) => {
        transferirTextura(i, e)
    })
}