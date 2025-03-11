/**
 * Problema A
 * - Dejar pasar solo a los mayores de edad
 * - EL primero que entre después de las 2 AM no paga
 */

/* Estado por defecto de la entrada */
let free = false;

/* time es el tiempo, tipo 2 AM y así... */
const validarCliente = (time) => {
    let age = prompt(`Cual es tu edad?`);
    if (age >= 18) {
        if (time >= 2 && time <7 && free == false) {
            alert(`Podes pasar gratis sorete, ya que son las ${time}`);
            free = true;
        }
        else {
            alert(`Podes pasar, pero paga la entrada gil, ya que son las ${time}`)
        }
    }
    else {
        alert(`Mira papu, sos menor de edad, anda a ver Peppa Pig`)
    }
}
let horariosDeEntrada = [2,1,4,8,4,6,3]

const validarSerieDeClientes= (arregloHorariosCLientes) => {
    for (horarioCliente of arregloHorariosCLientes) {
        validarCliente(horarioCliente);
    }
}

validarSerieDeClientes(horariosDeEntrada);