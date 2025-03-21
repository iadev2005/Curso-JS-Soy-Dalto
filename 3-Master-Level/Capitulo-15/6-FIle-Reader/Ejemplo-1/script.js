/**
 * FileReader
 * - ReadAsText()
 * - ReadAsDataURL()
 * - Ejemplo de uso 1 (Cargar galería dinamicamente)
 * - Ejemplo de uso 2 (Combinar con Drag & Drop)
 * - Ejemplo de uso 3 (Barra de progress y loadend)
 */

"use strict";

const leerArchivo = ar => {

    for (let i = 0; i < ar.length; i++) {
        const reader = new FileReader();
        reader.readAsText(ar[i]);
        reader.addEventListener("load", (e) => {
            console.log(JSON.parse(e.currentTarget.result));
        })
    }

    // Para leer un solo archivo
    // reader.readAsText(ar);
    // reader.addEventListener("load", (e) => {
    //     console.log(typeof e.currentTarget.result);
    //     console.log(e.currentTarget.result);
    //     console.log(typeof JSON.parse(e.currentTarget.result));
    //     console.log(JSON.parse(e.currentTarget.result));
    // })
}

// Es lo mismo solo que usamos readAsDataURL
const leerImagen= ar => {

    for (let i = 0; i < ar.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener("load", (e) => {
            let newImg = `<img src="${e.currentTarget.result}">`
            // Esto es solo demostrativo, lo correcto seria usar documentFragment
            document.querySelector(".resultado").innerHTML += newImg;
        })
    }
}

const archivo = document.getElementById("archivo");
archivo.addEventListener("change", (e) => {
    // Si fuera un solo archivo
    // leerArchivo(archivo.files[0]);
    // Si son varios archivos
    // leerArchivo(archivo.files);
    leerImagen(archivo.files);
})
