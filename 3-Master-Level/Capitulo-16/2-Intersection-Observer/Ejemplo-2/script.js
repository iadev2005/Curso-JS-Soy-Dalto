"use strict";

const publicaciones = document.querySelector(".publicaciones");
let contador = 0;
let noMorePosts = false;

const createPublication = (name, content) => {
    const container = document.createElement("div");
    const comentarios = document.createElement("div");
    const nombre = document.createElement("h3");
    const contenido = document.createElement("p");
    const btnComentario = document.createElement("input");
    const btnEnviar = document.createElement("input");

    container.classList.add("publicacion");
    comentarios.classList.add("comentarios");
    btnEnviar.classList.add("enviar");
    btnComentario.classList.add("comentario");

    btnComentario.setAttribute("placeholder", "Introduce un comentario");

    nombre.textContent = name;
    contenido.textContent = content;

    btnEnviar.type = "submit";

    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);

    container.appendChild(nombre);
    container.appendChild(contenido);
    container.appendChild(comentarios);

    return container;
}

const cargarMasPublicaciones = entry => {
    if (entry[0].isIntersecting && !noMorePosts) {
        cargarPublicaciones(4);
    }
}

const observer = new IntersectionObserver(cargarMasPublicaciones);

const cargarPublicaciones = async num => {
    const request = await fetch("informacion.json");
    const content = await request.json();
    const arr = content.content;
    const documentFragment = document.createDocumentFragment();

    for (let i = 0; i < num; i++) {
        if (arr[contador] != undefined) {
            const newPublicacion = createPublication(arr[contador].nombre, arr[contador].contenido);
            documentFragment.appendChild(newPublicacion);
            contador++;
            if (i == num - 1) observer.observe(newPublicacion);  // Observa la última nueva publicación
        } else {
            noMorePosts = true;  // Cambia el estado a true
            let noMore = document.createElement("h3");
            noMore.textContent = "No hay más publicaciones";
            documentFragment.appendChild(noMore);
            break;
        }
    }
    publicaciones.appendChild(documentFragment);
    
    // Si no hay más publicaciones, detén la observación de nuevas publicaciones
    if (noMorePosts) {
        observer.disconnect();
    }
}

cargarPublicaciones(1);