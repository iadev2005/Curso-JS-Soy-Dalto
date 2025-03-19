/**
 * Creación de Elementos
 * - createElements() - Crea un elemento
 * - createTextNode() - Para poner texto en los elementos
 * - appendChild() - Se aplican a los childs (etiquetas hijas)
 * - createDocumentFragment()
 */

const container = document.querySelector(`.container`);

/* Todo en mayúscula según Dalto, aunque en la documentación no vi nada al respecto */
const item = document.createElement("LI");

const textItem = document.createTextNode(`This is a item of the document`);

document.writeln(item)
console.log(item);
console.log(textItem);

item.appendChild(textItem);

container.appendChild(item);

/* Otra alternativa */
item.textContent = "WAZA "
item.appendChild(textItem);


container.appendChild(item);
/* Todo esto lo vi en la documentación, es muy bueno aprender de esa forma también, la unica diferencia significativa es que en la documentación se uso append, dalto uso appendChild, pero funciona igual */
/* Para agregar múltiples elementos */
const fragmento = document.createDocumentFragment();
const animales = [`Chiguire`, `Mono`, `Jirafa`, `Dinosaurio`];
const agregarElementos = () => {
    for (const animal of animales) {
        const li = document.createElement(`li`);
        li.textContent = animal;
        fragmento.append(li);
    }
}
agregarElementos();
container.append(fragmento);