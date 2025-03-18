/**
 * Ejercicio
 * - Crear un sistema que almacene toda la informacion de las materias y las muestre de manera ordenada
 */

const materiasHTML = document.querySelector(".materias");
const materias = [
    {
        nombre: "Fisica 1",
        nota: 7
    },
    {
        nombre: "Quimica 1",
        nota: 8
    },
    {
        nombre: "Matematicas 1",
        nota: 9
    },
    {
        nombre: "Programacion 1",
        nota: 10
    },
    {
        nombre: "Ingles",
        nota: 6
    },
    {
        nombre: "Historia",
        nota: 7
    },
    {
        nombre: "Biologia",
        nota: 5
    },
    {
        nombre: "Literatura",
        nota: 4
    }
];

const obtenerMateria = (id) => {
    return new Promise((resolve, reject) => {
        let materia = materias[id]; 
        if (materia === undefined) {
            reject("Lo siento, no existe la materia");
        } else {
            setTimeout(() => {
                resolve(materia);
            }, Math.random() * 400); 
        }
    });
}
// Verificando que funcione
// obtenerMateria(1).then(resultado => console.log(resultado));

const devolverMaterias = async() => {
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        // console.log(materia[i]);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>
        `;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();