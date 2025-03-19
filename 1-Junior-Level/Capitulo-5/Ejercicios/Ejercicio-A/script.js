/**
 * Problema A
 * - Solicitar los datos y decirle si aprueba o no
 * - Mostrar todo esto con colores representativos en consola (ejm: no aprobar en rojo)
 * - Todo esto estructurado con tabla
 */

const materias = {
    fisica: [90,6,3],
    matematica: [84,8,2],
    logica: [92,8,4],
    quimica: [96,8,4],
    calculo: [91,6,3],
    programacion: [79,7,4],
    biologia: [75,9,2],
    bd: [98,9,1],
    algebra: [100,10,4],
}

const evaluar= ()=> {
    for (let materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2]

        console.log(`${materia}`)

        if (asistencias >= 90) {
            console.log(`%c   Asistencias en orden`, `color:green`)
        } else {
            console.log(`%c   Falta de asistencias`, `color:red `)
        }

        if (promedio >= 7) {
            console.log(`%c   Promedio en orden`, `color:green`)
        } else {
            console.log(`%c   Promedio insuficiente`, `color:red`)
        }
        if (trabajos >= 3) {
            console.log(`%c   Trabajos practicos en orden`, `color:green`)
        } else {
            console.log(`%c   Faltan trabajos practicos`, `color:red`)
        }

    }
}

evaluar();