/**
 * Problema B
 * - Organizar las actividades diariamente
 * - Utilizar la consola para organizar todo
 * - El tiempo por tarea no debe superar las 4 horas
 */

/* 30 minutos en cosas de la casa, 100 minutos en trabajos, 10 minutos de descanso, 100 minutos en estudiar y 240 minutos trabajo */

// let trabajo = "240 minutos de trabajo";
// let estudio = "100 minutos de estudio";
// let tp = "100 minutos hacer trabajos prácticos";
// let homework = "30 minutos de cosas de la casa";
// let descanso = "10 minutos de descanso";

const horario = {
    trabajo: "240 minutos de trabajo",
    descanso : "10 minutos de descanso",
    estudio : "100 minutos de estudio",
    tp : "100 minutos hacer trabajos prácticos",
    homework : "30 minutos de cosas de la casa"
}

const pasarDia = (diasAPasar) => {
    let semana = 0;

    for (let dia = 1; dia <= diasAPasar; dia++) {
        // Si es el primer dia de la semana
        if (dia % 7 === 1) {
            if (semana > 0) {
                console.groupEnd(`Semana ${semana}`);
            }
            semana++;
            console.group(`Semana ${semana}`);
        }

        console.group(`Día ${dia}`);
        for (let seccion in horario) {
            console.log(horario[seccion]);
        }
        console.groupEnd(`Día ${dia}`);
    }
    
    if (semana > 0) {
        console.groupEnd(`Semana ${semana}`);
    }
}

pasarDia(14);