/**
 * Eventos de la Interfaz
 * - error - Ocurre cuando sucede un error durante la carga de un archivo multimedia
 * - load - Ocurre cuando un objeto se ha cargado
 * - beforeunload - Ocurre antes de que el documento esté a punto de descargarse
 * - unload - Ocurre una vez se ha descargado una página
 * - resize - Ocurre cuando se cambia el tamaño de la vista del documento
 * - scroll - Ocurre cuando se desplaza la barra de desplazamiento de un elemento
 * - select - Ocurre después de que el usuario selecciona algún texto de <input> o <textarea>
 */

const img = document.querySelector(`.img`);
const input = document.querySelector(`.input`);
const seleccionado = document.querySelector(`.seleccionado`)

/* Bueno en teoría tendría que cancelar la carga de la página, y al no cargarse la imagen en la consola diría que hay un error, pero claro, no me da tiempo para cancelar la página así que lo dejo a la imaginación */
// img.addEventListener(`error`, ()=> {
//     console.log(`Ha sucedido un error`);
// })

/* A window en particular se accede de manera directa */
/* No hace falta poner window, ya que esta por defecto */
// window.addEventListener(`load`, ()=> {
//     console.log(`Se ha cargado el sitio`);
// })

// addEventListener(`load`, ()=> {
//     console.log(`Se ha cargado el sitio`);
// })

// addEventListener("beforeunload", ()=> {
//     console.log("Estas por salir del sitio");
// })

/* La diferencia con el anterior, es que este muestra el mensaje cuando se esta a punto de salir del sitio y cuando te vas del sitio */
// addEventListener("unload", ()=> {
//     console.log("Estas por salir del sitio");
// })

/* Este evento sucede cuando se cambia el tamaño de vista del documento */
// addEventListener("resize", ()=> {
//     console.log("Se cambio el tamaño de vista del documento");
// })

/* Se activa cuando hay scroll */
// addEventListener("scroll", ()=> {
//     console.log("Se ha scrolleado");
// })

// addEventListener("scroll", ()=> {
//     console.log("Se ha scrolleado");
// })

/* En la consola se reflejara que se selecciono el input */
// input.addEventListener(`select`, (e) => {
    // console.log(`Se ha seleccionado el input`);
    // console.log(`Inicia en la posicion ${e.target.selectionStart}`)
    // console.log(`Termina en la posicion ${e.target.selectionEnd}`)
    // let start = e.target.selectionStart;
    // let end = e.target.selectionEnd;
    // let textoCompleto = input.value;
    // seleccionado.textContent = textoCompleto.substring(start, end);
// })

input.addEventListener("keyup", (e)=> {
    let tecla = e.key;
    nuevoContenido = `La ultima tecla presionada fue: <strong>${tecla}</strong>`;
    seleccionado.innerHTML = nuevoContenido;
})