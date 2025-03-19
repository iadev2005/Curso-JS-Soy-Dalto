/**
 * Problema C
 * - Crear una función para preguntarle a cofla en que materia se quiere inscribir
 * - Si ya hay 20 alumnos inscritos en la materia negarle la inscripcion
 * - Si hay menos de 20 alumnos inscribir a cofla y añadirlo a la lista de alumnos
 */

let materias = {
    /* El primero será el profesor */
    fisica: ["Perez", "Pedro", "Juan", "Carlos", "Andres", "David", "Messi", "Neymar", "Busquets", "Zidane", "Oblak", "Maradona", "Platini", "Van Basten", "Bale", "Ronaldo", "Ramos", "Mbappe", "Jordan", "Pele", "Chicharito", "Rooney", "Tevez"],
    matematica: ["Rodriguez", "Pedro", "Maria", "Juan", "Andres", "David"],
    logica: ["Hernandez","Pedro", "Maria", "Juan", "Carlos"],
    quimica: ["Aliendres", "Pedro", "David"],
    programacion: ["Dalto", "Pedro", "Carlos", "Andres", "David"]
}

const inscribir = (alumno, materia) => {
    let alumnos = materias[materia];
    if (alumnos.length>=21) {
        document.writeln(`Lo siento ${alumno}, las clases de ${materia} ya están llenas`)
    } else {
        // document.writeln(`Bienvenido ${alumno} a ${materia}`)
        /* Lamentablemente con lo que sabemos hasta ahora no podemos hacer esto */
        // materias[0].push(alumno);
        alumnos.push(alumno);
        if (materia == "fisica") {
            materias = {
                fisica: alumno,
                matematica: materias[`matematica`],
                logica: materias[`logica`],
                quimica: materias[`quimica`],
                programacion: materias[`programacion`]

            }
        } else if (materia == "matematica") {
            materias = {
                fisica: materias[`fisica`],
                matematica: alumno,
                logica: materias[`logica`],
                quimica: materias[`quimica`],
                programacion: materias[`programacion`]
            }
        } else if (materia == "matematica") {
            materias = {
                fisica: materias[`fisica`],
                matematica: alumno,
                logica: materias[`logica`],
                quimica: materias[`quimica`],
                programacion: materias[`programacion`]
            }
        } else if (materia == "logica") {
            materias = {
                fisica: materias[`fisica`],
                matematica: materias[`matematica`],
                logica: alumnos, 
                quimica: materias[`quimica`],
                programacion: materias[`programacion`]
            };
        } else if (materia == "quimica") {
            materias = {
                fisica: materias[`fisica`],
                matematica: materias[`matematica`],
                logica: materias[`logica`],
                quimica: alumnos, 
                programacion: materias[`programacion`]
            };
        } else if (materia == "programacion") {
            materias = {
                fisica: materias[`fisica`],
                matematica: materias[`matematica`],
                logica: materias[`logica`],
                quimica: materias[`quimica`],
                programacion: alumnos 
            }
        }
        document.writeln(`<p>Felicidades ${alumno}, te inscribiste en ${materia}</p>`)
    }
}
document.writeln(materias[`quimica`]);
inscribir("Ignacio", "quimica");
document.writeln(materias[`quimica`]);