/**
 * Problema B
 * - Interfaz agradable y atractiva
 * - Contener datos de manera estructurada
 * - Deben actualizar y reemplazar
 */

const btn = document.querySelector(`.confirm`);
const contenedor = document.querySelector(`.grid-container`);
/* Lo más cercano a un array asociativo en JS: */
const alumnos = [
    {
        nombre: "Ignacio Aliendres",
        email: "iadev0721@gmail.com",
        materia: "Ninguna"
    },
    {
        nombre: "Lionel Messi",
        email: "messi@gmail.com",
        materia: "Física"
    },
    {
        nombre: "María González",
        email: "maria.gonzalez@example.com",
        materia: "Matemáticas"
    },
    {
        nombre: "Carlos Pérez",
        email: "carlos.perez@example.com",
        materia: "Química"
    },
    {
        nombre: "Ana Torres",
        email: "ana.torres@example.com",
        materia: "Literatura"
    },
    {
        nombre: "Julián Romero",
        email: "julian.romero@example.com",
        materia: "Historia"
    },
    {
        nombre: "Lucía Fernández",
        email: "lucia.fernandez@example.com",
        materia: "Biología"
    },
    {
        nombre: "Diego Maradona",
        email: "diego.maradona@example.com",
        materia: "Educación Física"
    },
    {
        nombre: "Sofía López",
        email: "sofia.lopez@example.com",
        materia: "Arte"
    },
    {
        nombre: "Miguel Angel",
        email: "miguel.angel@example.com",
        materia: "Física"
    }
];

// for (let alumno in alumnos) {
//     for (let datos in alumnos[alumno]) {
//         console.log(alumnos[alumno][datos]);
//     }
// }

/* Se hizo una optimizacion, siempre es mejor pimero guardar todos los elementos que se van a enviar y luego enviarlos. Hacerlo de manera dinámica consume más recursos */
let htmlCode = ``;

for (let alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos[`nombre`];
    let email = datos[`email`];
    let materia = datos[`materia`]; 
    htmlCode += `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`
}
contenedor.innerHTML = htmlCode;

btn.addEventListener(`click`, ()=> {
    let confirmar = confirm("Realmente quieres confirmar las mesas?");
    if (confirmar) {
        document.body.removeChild(btn);
        /* Elements seleccionara en todo momento a todos los elementos con la clase semana */
        let elements = document.querySelectorAll(`.semana`);
        /* Semana elegida hará lo mismo con sus respectivo elementos con esa clase */
        let semanaElegida = document.querySelectorAll(`.semana-elegida`);
        /* En este bucle vamos recorriendo todos los elementos con la clase semana y le vamos añadiendo el valor de la semana que eligio el usuario */
        for (let element in elements) {
            semana = elements[element];
            semana.innerHTML = semanaElegida[element].value;
        }
    } // De lo contrario no pasa nada...
})