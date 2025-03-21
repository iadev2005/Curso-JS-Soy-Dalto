"use strict";

const anadirCeros = n => {
    return (n.toString().length < 2) ? "0".concat(n) : n;
}

const actualizarHora = () => {
    const time = new Date();
    let hora = anadirCeros(time.getHours());
    let min = anadirCeros(time.getMinutes());
    let seg = anadirCeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
}

actualizarHora();

setInterval(actualizarHora, 1000);
