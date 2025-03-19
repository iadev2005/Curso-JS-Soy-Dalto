/**
 * Problema B
 * - Crear mini-sistema para registrar presente y ausentes en la clase
 * - Pasados los 30 días mostrar la situación final de todos los alumnos (total de presentes y ausentes)
 * - Se puede tener máximo de 10% de ausencias por semestre, si se tienen más aclarar que esta reprobado 
 */

let cantidad = parseInt(prompt(`Che boludo y cuántos alumnos son?`));
/* Inicializamos el arreglo vacío */
let alumnos = [];

const registrarAlumnos = (cantidad,alumnos) => {
    for (let i=0; i<cantidad; i++) {
        let nombre = prompt(`Nombre del alumno: ${i+1}`);
        /* Por defecto */
        let asistencias = 0; 
        let inasistencias = 0;
        let aprobado = true;
        /* Rellenamos un array, donde cada posición tiene otro array, pero con los campos de los alumnos */
        alumnos[i] = [nombre,asistencias,inasistencias,aprobado];
    }
}

const imprimirAlumnos = () => {
    document.writeln(`<h2>Datos de alumnos</h2>`)
    for (let i=0; i<alumnos.length; i++) {
        document.writeln(`<p><strong>Nombre:</strong> ${alumnos[i][0]}</p><p><strong>Asistencias:</strong> ${alumnos[i][1]}</p><p><strong>Inasistencias:</strong> ${alumnos[i][2]}</p><p><strong>Aprobado:</strong> ${alumnos[i][3]}</p>`)
    }
}

const tomarAsistencia = () => {
    for (let i=0; i<alumnos.length; i++) {
        let presente = prompt(`${alumnos[i][0]} esta presente? (P para presente, A para ausente)`)
        if(presente.toUpperCase() == 'P') {
            /* Hay que recordar que estamos en un arreglo bidimensional, alumnos[i][0] haría referencia al primer campo de los alumnos (nombre) y alumnos[i][1] hace referencia a las asistencias */
            alumnos[i][1]++;
        }
        else if (presente.toUpperCase() == 'A') {
            alumnos[i][2]++;
        }
        else {
            alert(`Valor inválido`);
            /* Realmente este continue no es necesario */
            // continue;
        }
    }
}

const rasparPorInasistencia = dias => {
    let porcentajeInasistencias = 0.1 * dias; /* Porcentaje de inasistencias */
    for (let i=0; i<alumnos.length; i++) {
        if(alumnos[i][2]>=porcentajeInasistencias) {
            alert(`${alumnos[i][0]}, usted ha raspado por inasistencias, no asistio ${alumnos[i][2]} veces a clases y tenía un máximo de ${porcentajeInasistencias} de inasistencias permitidas`);
            alumnos[i][3] = false;
        }
    }
}

const pasarDias = dias => {
    for (let i=0; i<dias; i++) {
        tomarAsistencia();
    }
    rasparPorInasistencia(dias);
}



registrarAlumnos(cantidad,alumnos);
pasarDias(3);
imprimirAlumnos();