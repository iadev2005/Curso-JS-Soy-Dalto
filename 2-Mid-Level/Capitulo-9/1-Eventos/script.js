/**
 * Eventos
 * - Definicion
 * - De Eventos o Event Handlers
 * - El objeto Event
 * - Flujo de Eventos o event flow
 * - Event Bubbling vs Event Capturing
 * - event.stopPropagation()
 */

/* Para asociar eventos */

/* Esto no es recomendable hoy en día */
const button = document.querySelector(`.button`);

// button.onclick = ()=> {
//     alert(`saludar`);
// }

/* La alternativa correcta son los Event Listeners (Escucha de evento) */
// button.addEventListener(`click`, saludar);

/* Esta tipo de funciones no las podemos utilizar aqui */
// const saludar = () => {
//     alert(`Holap`)
// }

/* Esto en el caso de que no tenga parámetros, si tiene parámetros se usa una función flecha en la misma invocacion del addEventListener */
// function saludar() {
//     alert("hola");
    /* En este caso como no usamos funcionas anónimas, si podemos removerlo. Ya que esta función es asociada */
//     button.removeEventListener(`click`, saludar);
// }

/* Si quisieramos ser más directo con el mensaje pero sin parámetros usaríamos un función flecha */

// button.addEventListener(`click`, () => alert("hola"));

/* Esto no funcionaría */
// button.addEventListener(`click`, saludar(`Ignacio`));

// function saludar(nombre) {
//     alert("hola " + nombre);
// }

/* Esto es lo que tendriamos que hacer si tenemos parametros */
function mensaje(nombre) {
    alert(`Hola ${nombre}`);
   // En este caso no podemos removerlo
    button.removeEventListener("click", () => mensaje(`Ignacio`));
}

// button.addEventListener(`click`, () => mensaje(`Ignacio`));

// Para ver el tipo de evento al cual estamos haciendo referencia usamos lo siguiente

// button.addEventListener(`click`, (e) => {
//     console.log(e);
//     // Si queremos saber en que elemento esta el evento usamos .target
//     console.log(`Di click en el botón ${e.target}`);
// })

const contenedor1= document.querySelector(`.contenedor-1`)
const contenedor2= document.querySelector(`.contenedor-2`)

// contenedor.addEventListener(`click`, (e) => {
//     console.log(e);
//     // Si queremos saber en que elemento esta el evento usamos .target
//     console.log(`Di click en el contenedor ${e.target}`);
// })

/* En el caso anterior, primero detecto el botón y luego el container, esto tiene que ver con el flujo. Esto es el Event Bubbling, se ejecuta desde el más específico hasta el menos especifico */

/* Podemos priorizar los elementos a nuestra preferencia si pasamos el parametro True, para priorizarlos */

// contenedor1.addEventListener(`click`, (e) => {
//     console.log(e);
//     // Si queremos saber en que elemento esta el evento usamos .target
//     console.log(`Di click en el contenedor 1${e.target}`);
// }, true)

contenedor1.addEventListener(`click`, (e) => {
    console.log(e);
    // Si queremos saber en que elemento esta el evento usamos .target
    console.log(`Di click en el contenedor 1${e.target}`);
})

contenedor2.addEventListener(`click`, (e) => {
    console.log(e);
    // Si queremos saber en que elemento esta el evento usamos .target
    console.log(`Di click en el contenedor 2${e.target}`);
}, )

button.addEventListener(`click`, (e) => {
    console.log(e);
    // Si queremos saber en que elemento esta el evento usamos .target
    console.log(`Di click en el botón ${e.target}`);
    e.stopPropagation();
})
/* Si no quisieramos que siga esa propagación, es decir, que pulsemos el botón y sea solo el botón usamos e.stopPropagation

/* Ahora a pesar que pulsemos el botón primero se seleccionara el container */