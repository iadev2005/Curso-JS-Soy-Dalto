/**
 * Callbacks
 * - Concepto (Function in function)
 * - Ejemplos
 * - Problemas de los callbacks
 */

/* Un callback es una función dentro de una función */

/* Tenemos 3 formas de hacer esto */

// 1era

// function prueba(callback) {
//     callback("pedro");
// }

// function decirNombre(nombre) {
//     console.log(nombre);
// }

// prueba(decirNombre);

// 2da 

// function prueba(callback) {
//     callback("pedro");
// }

// prueba(function decirNombre(nombre) {
//     console.log(nombre);
// });

// 3era (función flecha)

// function prueba(callback) {
//     callback("pedro");
// }

// prueba((nombre) =>  {
//     console.log(nombre);
// });

// 4ta (ya que tenemos un solo parámetro podemos hacer lo siguiente)

// function prueba(callback) {
//     callback("pedro");
// }

// prueba(nombre => console.log(nombre));

/* Podriamos ver a callback en general como la otra función que llamaremos dentro de ella misma */

/* Tienen una desventaja pero para ella estan las promesas */

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// let p = new Persona("Ignacio", "Aliendres");
// console.log(p);

// Si quisieramos crear muchas personas
const datosPersonas = [
    ["Lionel", "Messi"],
    ["Cristiano", "Ronaldo"],
    ["Karim", "Benzema"]
]

const personas = [];

for (let i=0; i<datosPersonas.length; i++) {
    personas[i] = new Persona(datosPersonas[i][0], datosPersonas[i][1]);
}

console.log(personas);

console.log("The GOAT is: " + personas[0].apellido);

const obtenerPersona = (id, cb) => {
    if (personas[id] == undefined) {
        cb("No se ha encontrado la persona");
    } else {
        cb(null, personas[id], id);
    }
}

const obtenerNombre = (id, cb) => {
    if (personas[id].nombre == undefined) {
        cb("No se ha encontrado el nombre de la persona");
    } else {
        cb(null, personas[id].nombre);
    }
}

const obtenerApellido = (id, cb) => {
    if (personas[id].apellido == undefined) {
        cb("No se ha encontrado el apellido de la persona");
    } else {
        cb(null, personas[id].apellido);
    }
}


// El número es la id
obtenerPersona(1, (error, persona, id) => {
    if (error) {
        console.log(error);
    } else {
        obtenerNombre(id, (error, nombre) => {
            if (error) {
                console.log(error);
            } else {
                console.log(nombre)
            }
        });
        // console.log(persona.apellido);
        obtenerApellido(id, (error, apellido) => {
            if (error) {
                console.log(error);
            } else {
                console.log(apellido);
            }
        });
    }
})

// obtenerNombre(1, (error, nombre) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(nombre)
//     }
// })

// Pero suponiendo que querramos verificar si siquiera hay un apellido o un nombre, y en caso de que exista realizar otra acción, esto terminaria siendo un codigo spagetti, para eso se usan las promesas