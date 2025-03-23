/**
 * Cookies
 * - Definición y usos comunes (Diferenciar usuarios, UX, ads, etc.)
 * - Formas de clasificar cookies
 * - Crear una cookie
 * - Metodos encondeURLComponent() y decodeURLComponent()
 * - Leer una cookie
 * - Modificar una cookie
 * - Borrar una cookie
 * - Ejemplo de uso (Aviso de uso de cookies, cumplimiento con el RGPD y la ePrivacy)
 */

// COOKIES: clave= valor (y atributos)

let cookies = document.cookie;
// No mostrará anda ya que aún no hay una cookie
// console.log(cookies);
// document.cookie = "user=ignacio";
// document.cookie = "user=papu";
// document.cookie = "goat=messi";
// document.cookie = "apuesta=binomo";

// const crearCookies = (name, value, exp, path) => {
//     document.cookie = `${name}=${value};expires=${exp};path=${path}`;
// }

// // Llamada a la función con los parámetros adecuados
// crearCookies("nombre", "ignacio", "Mon, 24 Mar 2025 12:00:00 UTC", "/");

// Si no le ponemos expires, expira al cerrar la sesión

const crearCookies = (name, value, dias) => {
    const fechaActual = new Date();
    fechaActual.setTime(fechaActual.getTime() + (dias * 24 * 60 * 60 * 1000)); // Convertir días a milisegundos
    const exp = `expires=${fechaActual.toUTCString()}`; 
    document.cookie = `${name}=${value};${exp};path=/`; 
}

crearCookies("nombre", "ignacio", 4);

const obtenerCookie = cookieName => {
    let cookies = document.cookie;
    cookies = cookies.split(";"); // Separamos a las cookies por un ";"
    for (i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)) {
            return cookie.split("=")[1]; // El uno es lo que viene despues de la varibale (nombre)

        }
    }
    // No hay cookies con ese nombre
    return null;
}

// Para modificar una cookie bastaría con poner esto en la consola de comandos

// document.cookie = "nombre=cambiodenombre";
// obtenerCookie("nombre");

// Para elminniar una cookie partimos del mismo concepto, es modificarla en su campo de expiración para que expire a los 0s

// document.cookie = "nombre = 0; max-age = 0"

// De todas maneras nunca esta demás tener las funciones

const modificarCookie = (name, value, dias) => {
    crearCookies(name, value, dias);
}

const eliminarCookie = name => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`; 
}