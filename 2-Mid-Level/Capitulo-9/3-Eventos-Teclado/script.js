/**
 * Eventos del Teclado
 * - keypress - Ocurre cuando una tecla se presiona y se suelta en el mismo elemento
 * - keydown - Ocurre cuando una tecla se presiona
 * - keyup - Ocurre cuando una tecla se deja de presionar
 * 
 */

const button = document.querySelector(`.button`);
const contenedor = document.querySelector(`.contenedor`);
const input= document.querySelector(`.input`);

/* Es curioso el comportamiento con bloq mayus, ya que no detecta que se dejo de presionar (incluso si lo hicimos) hasta que se descative */

input.addEventListener(`keydown`, (e) => {
    console.log(`Una tecla ${e.code} fue presionada`);
})

input.addEventListener(`keypress`, (e) => {
    console.log(`Una tecla ${e.code} fue presionada y se dejo de presionar`);
})

input.addEventListener(`keyup`, (e) => {
    console.log(`Una tecla ${e.code} se dejo de presionar`);
})

