/* Trabajando con callbacks y promesas */

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// El apellido de Cristiano no se encontraria
const datosPersonas = [
    ["Lionel", "Messi"],
    ["Cristiano", ],
    ["Karim", "Benzema"]
]

const personas = [];

for (let i=0; i<datosPersonas.length; i++) {
    personas[i] = new Persona(datosPersonas[i][0], datosPersonas[i][1]);
}

console.log(personas);

console.log("The GOAT is: " + personas[0].apellido);

const obtenerPersona = (id) => {
    return new Promise((resolve, reject) => {
        if (personas[id] == undefined) reject("No se encontro a la persona");
        else resolve(personas[id]);
    })

}

const obtenerNombre = (id) => {
    return new Promise((resolve, reject) => {
        if (personas[id].nombre == undefined) reject("No se encontro el nombre de la persona");
        else resolve(personas[id].nombre);
    })
}

const obtenerApellido = (id) => {
    return new Promise((resolve, reject) => {
        if (personas[id].apellido == undefined) reject("No se encontro el apellido de la persona");
        else resolve(personas[id].apellido);
    })
}


// El número es la id
// obtenerPersona(1).then((persona) => {
//     obtenerNombre(1).then((nombre) => {
//         console.log(nombre);
//     });
//     obtenerApellido(1).then((apellido) => {
//         console.log(apellido);
//     });
// })

// Por los momentos manejaremos un solo error, es lo que podemos hacer con nuestro conocimiento 

// No se encuentra a la persona
// let id = 5; // Definiendo el ID

let id = 1;
// Asi es la estructura de los .then
obtenerPersona(id)
    .then((persona) => {
        // El promise.all es para manaejar ambas promesas en simultaneo
        return Promise.all([obtenerNombre(id), obtenerApellido(id)]);
    })
    
    .catch((e) => {
        console.log(e);
    });

// .then(([nombre, apellido]) => {
//     console.log(`Nombre: ${nombre}`);
    //     console.log(`Apellido: ${apellido}`);
// })