/**
 * Objeto Date
 * - getDate()
 * - getDay()
 * - getMonth()
 * - getYear()
 * - getHours()
 * - getMinutes()
 * - getSeconds()
 * - Ejemplo de uso (alarma)
 */

"use strict";
const fecha = new Date();
console.log(fecha);
// getDate() nos devuelve el dia del mes
console.log(fecha.getDate());
// getDay() nos devuelve el dia de la semana
// NOTA: El domingo devuelve 0
console.log(fecha.getDay());
// getMonth() devuelve el mes
// NOTA: Enero es 0
console.log(fecha.getMonth());
// getYear() devuelve el año actual - 1900
// NOTA: Ya no se usa getYear(), ahora se usa getFullYear() que devuelve el año conciso
console.log(fecha.getFullYear());
// getHours() devuelve las horas del dia
console.log(fecha.getHours());
// Devuelve los minutos
console.log(fecha.getMinutes());
// Devuelve los segundos
console.log(fecha.getSeconds());

// console.log(Date.now())