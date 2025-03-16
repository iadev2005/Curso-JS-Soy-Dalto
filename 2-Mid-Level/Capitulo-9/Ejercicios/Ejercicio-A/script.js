/**
 * Ejercicio A
 * - El formulario debe contener nombre completo, mail y materia adeudada
 * - Se debe validar que el mail sea valido y que los nombres sean reales
 * - Se debe enviar al servidor de manera pulida
 */

/* Esto no sirve, ya que los estamos seleccionando por id */
// const nombre = document.querySelector(`.nombre`);
// const email = document.querySelector(`.email`);
// const materia = document.querySelector(`.materia`);
// const boton = document.querySelector(`.btn-enviar`);

const nombre = document.getElementById(`nombre`);
const email = document.getElementById(`email`);
const materia = document.getElementById(`materia`);
const boton = document.getElementById(`btn-enviar`);
const resultado = document.querySelector(`.resultado`);
/* Expresión regular del email */
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

boton.addEventListener(`click`, (e)=> {
    /* Esto previene el comportamiento estandar, en este caso no envia los datos al formulario */
    e.preventDefault();
    let error = validarCampos();
    if (error[0]) {
        // if(resultado.className.includes("succes")) {
        //     resultado.classList.remove(`succes`);
        // }
        resultado.innerHTML = error[1];
        resultado.classList.add(`failure`);
    } else {
        resultado.innerHTML = error[1];
        resultado.classList.add(`succes`);
        resultado.classList.remove(`failure`);
    }
})

const validarCampos = ()=> {
    let error = [];
    if (nombre.value.length < 5) {
        error[0] = true;
        error[1] = "El nombre debe tener como mínimo 5 carácteres";
        return error;
    } else if (nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre debe tener como máximo 40 carácteres";
        return error;
    } else if (email.value.length < 5) {
        error[0] = true;
        error[1] = "El email debe tener como mínimo 5 carácteres";
        return error;
    } else if (email.value.length > 40) {
        error[0] = true;
        error[1] = "El email debe tener como máximo 40 carácteres";
        return error;
    } else if (!regexEmail.test(email.value)) {
        error[0] = true;
        error[1] = "El email no tiene un formato válido";
        return error;
    } else if (materia.value < 4) {
        error[0] = true;
        error[1] = "La materia debe tener como mínimo 4 carácteres";
        return error;
    } else if (materia.value > 40) {
        error[0] = true;
        error[1] = "La materia debe tener como máximo 40 carácteres";
        return error;
    }
    error[0] = false;
    error[1] = "Solicitud enviada correctamente";

    return error;
}