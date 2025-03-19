/**
 * Ejercicio
 * - Un sistema que le permita obtener esa información
 * - Mostrarla ordenadamente en un sitio web
 */
let aprobados = document.querySelector(".num-aprobados");
let desaprobados = document.querySelector(".num-desaprobados");

const getInfo = async ()=> {
    try {
        resultado = await axios("informacion.txt");
        resultado = resultado.data;
        aprobados.innerHTML = resultado.aprobados;
        desaprobados.innerHTML = resultado.desaprobados;
    } catch(e) {
        aprobados.innerHTML = "La API fallo";
        desaprobados.innerHTML = "La API fallo";
        console.log(e)
    }
}

document.getElementById("getInfo").addEventListener("click", getInfo);