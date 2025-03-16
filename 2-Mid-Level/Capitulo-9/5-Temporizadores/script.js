/**
 * Timers / Temporizadores
 * - setTimeout()
 * - setInterval
 * - clearTimeout()
 * - clearInterval()
 */

/* Escribe hola en el documento pasado dos segundos */
// setTimeout(()=> {
//     document.writeln(`Hola`)
// }, 2000);

// const saludar = ()=> {
//     document.writeln(`Hola`);
// }

// const temporizador = setTimeout(saludar, 2000);
/* Esto para que nunca se ejecute */
// clearTimeout(temporizador);

/* Si queremos que se reproduzca en bucle podemos usar setInterval */
const intervalo = setInterval(()=> {
    document.writeln("Hola");
}, 2000)

/* Esto con el comando clearTimeout(intervalo) desde consola podriamos frenarlo */

setTimeout(()=> {
    clearInterval(intervalo);
}, 6000)