/**
 * Problema B
 * - Crear una función que al pasarle como parámetro la materia nos devuelva: profesor asignado, el nombre de todos los alumnos
 * - Crear función que nos diga en cuantas clases esta cofla
 * - Nombrar las clases en las que está y los profesores de cada una
 */

const obtenerInformacion = (materia) => {
    const materias = {
        /* El primero será el profesor */
        fisica: ["Perez", "Pedro", "Juan", "Carlos", "Andres", "David"],
        matematica: ["Rodriguez", "Pedro", "Maria", "Juan", "Andres", "David"],
        logica: ["Hernandez","Pedro", "Maria", "Juan", "Carlos"],
        quimica: ["Aliendres", "Pedro", "David"],
        programacion: ["Dalto", "Pedro", "Carlos", "Andres", "David"]
    }
    if (materias[materia]) {
        /* Devuelvo los datos de la materia, el nombre y la el array asociativo */
        return [materias[materia], materia, materias];
    } else {
        return materias;
    }
}
const mostrarInformacion = (materia) => {
    let info = obtenerInformacion(materia);
    let profesor = info[0][0];
    let alumnos = info[0];
    alumnos.shift();
    let nombreMateria = info[1];
    document.writeln(`<h2>Profesor de la materia ${nombreMateria}</h2>`);
    document.writeln(`<p>${profesor}</p>`);
    document.writeln(`<h2>Alumnos presentes en ${nombreMateria}</h2>`);
    document.writeln(`<p>${alumnos}</p>`);
}

const alumnoClases = (alumno) => {
    let cantidad = 0;
    let clasesPresentes = [];
    let informacion = obtenerInformacion();
    for (info in informacion) {
        if(informacion[info].includes(alumno)) {
            clasesPresentes.push(" "+info);
            cantidad++;
        }
    }
    return [cantidad, clasesPresentes];
}

mostrarInformacion("quimica");
document.writeln(`<p>Pedro esta en ${alumnoClases("Pedro")[0]} clases</p>`)
document.writeln(`<p>Pedro esta en${alumnoClases("Pedro")[1]}</p>`)

