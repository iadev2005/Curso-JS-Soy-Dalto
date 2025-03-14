/**
 * Problema A
 * - Indicarle las 20 llaves posibles con sus 4 imágenes y Cofla debe seleccionar cual usar
 * - Una vez seleccionada enviar los datos al servidor y que otro programador se encargue
 */

const contenedor = document.querySelector(`.flex-container`);
console.log(contenedor);

const crearLlave = (nombre, modelo, precio) => {
    /* Acá pudimos haber usado createElement */
    img = `<img class = "llave-img" src = "llave.png">`;
    nombre = `<h2>Llave ${nombre}</h2>`;
    modelo = `<h3 class = "modelo">Modelo ${modelo}</h3>`;
    precio = `<p>Precio: <strong class = "precio-cantidad">$${precio}</strong><p>`;
    return [img, nombre, modelo, precio];
}

let documentFragment = document.createDocumentFragment();

const changeHidden = (n) => {
    document.querySelector(`.key-data`).value = n;
}

const generarLlaves = cantidad => {
    for (let i = 1; i <= cantidad; i++) {
        let modeloRandom = Math.round(Math.random()*10000);
        let precioRandom = Math.round(Math.random()*10+30);
        let llave = crearLlave(`${i}`, `${modeloRandom}`, `${precioRandom}`);
        let div = document.createElement(`div`);
        div.addEventListener(`click`, () => (changeHidden(modeloRandom)));
        div.tabIndex = i;
        div.classList.add(`item-${i}`, `flex-item`);
        /* Acá hay una manera más sencilla de mandarlo */
        div.innerHTML = llave.join(``);
        documentFragment.appendChild(div);
    }
}



generarLlaves(20);
contenedor.appendChild(documentFragment);

// const llave = crearLlave(`Llave 1`, `Modelo X`, `33`);
// document.writeln(llave[0], llave[1], llave[2]);
// contenedor.innerHTML = llave[0] + llave[1] + llave[2];
