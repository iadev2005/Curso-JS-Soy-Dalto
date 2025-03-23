let cookies = document.cookie;

const crearCookies = (name, value, dias) => {
    const fechaActual = new Date();
    fechaActual.setTime(fechaActual.getTime() + (dias * 24 * 60 * 60 * 1000)); // Convertir días a milisegundos
    const exp = `expires=${fechaActual.toUTCString()}`; 
    document.cookie = `${name}=${value};${exp};path=/`; 
}

const obtenerCookie = cookieName => {
    let cookies = document.cookie;
    cookies = cookies.split(";"); // Separamos a las cookies por un ";"
    for (i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)) {
            return cookie.split("=")[1]; // El uno es lo que viene despues de la varibale (nombre)

        }
    }
    return null;
}

const modificarCookie = (name, value, dias) => {
    crearCookies(name, value, dias);
}

const eliminarCookie = name => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`; 
}

document.addEventListener("DOMContentLoaded", () => {
    const bgModal = document.querySelector(".bg-modal");

    if (obtenerCookie("acceptedCookies") !== "si") {
        setTimeout(() => {
            bgModal.style.zIndex = "10"; 
            bgModal.style.opacity = "1"; 

            document.getElementById("accept").addEventListener("click", () => {
                crearCookies("acceptedCookies", "si", 30);
                bgModal.style.opacity = "0"; 
                setTimeout(() => {
                    bgModal.style.zIndex = "-1";
                }, 1000);
            });

            document.getElementById("deny").addEventListener("click", () => {
                crearCookies("acceptedCookies", "no", 30);
                bgModal.style.opacity = "0"; 
                setTimeout(() => {
                    bgModal.style.zIndex = "-1";
                }, 1000);
            });
        }, 200);
    }
});