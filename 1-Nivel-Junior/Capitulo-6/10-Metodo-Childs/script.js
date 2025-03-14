/**
 * Metodos de Childs (Hijos)
 * - replaceChild()
 * - removeChild()
 * - hasChildNodes()
 */

/* Esto era practicando, y lo hice bastante bien, esto es muy óptimo */
// const contenedor = document.querySelector(`.contenedor`);
// const h2 = document.createElement(`h2`);
// const p = document.createElement(`p`);
// const texto = ["Titulo", "Parrafo"];
// h2.textContent = texto[0];
// p.textContent= texto[1];
// const fragment = new DocumentFragment();
// fragment.append(h2);
// fragment.append(p);
// contenedor.append(fragment);

const contenedor = document.querySelector(`.contenedor`);
crearElemento = (tipo, texto) => {
    const elemento = document.createElement(tipo);
    elemento.textContent = texto;
    return elemento;
}

/* Estos son los nuevos */
const h2 = crearElemento('h2', 'Parrafo');
const p = crearElemento('p', 'Titulo');

let selector = document.querySelector(`.titulo-antiguo`);
/* Primer parametro es lo que vamos a insertar, el segundo lo que vamos a reemplazar */
contenedor.replaceChild(h2, selector);

/* Vamos a suponer que no reemplazamos esto */
// selector = document.querySelector(`.parrafo-antiguo`);
// contenedor.replaceChild(p, selector);
selector = document.querySelector(`.parrafo-antiguo`);
/* Y lo mandamos a la mrd */
contenedor.removeChild(selector);

/* Y esto que verifica si un nodo tiene un hijo o no */
/* Y bueno le queda un hijo así que true */
document.writeln(`<p>${contenedor.hasChildNodes()}</p>`)

/* Ojo el texto que esta en la etiqueta también cuenta como hijo */