/**
 * ___Funciones de Registro___
 * - assert() - Aparece un mensaje de error en la consola si la afirmación es falsa. Si la afirmación es verdadera, no aoarecerá nada. (NO ESTANDAR)
 * - clear() - Limpia la consola
 * - error() - muestra un mensaje de error en la Consola Web
 * - info() - Emite un mensaje informativo a la Consola Web. En Firefox y Chrome, se muestra un pequeño icono "i" junto estos elementos en el registro de la Consola Web
 * - log() - Muestra un mensaje en la consola web (o del interprete de JS)
 * - table() - Esta función toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parámetro adicional: columns y nos muestra una tabla en consola
 * - warn() - Imprime un mensaje de advertencia en la consola web
 * - dir() - Despliega una lista interactiva de las propiedades del objeto JS especificado (NO ESTANDAR)
 * 
 * ___Funciones de Conteo___
 *  - count() - Registra el número de veces que se llama a count(). Esta función toma como parámetro opcional una etiqueta
 * - countReset() - Resetea el contador console.count()
 * 
 * ___Funciones de Agrupación___
 * - group() - Crea un nuevo grupo en lína en el registro de la consola web
 * - groupEnd() - Remueve un grupo en línea en el registro de la consola web
 * - groupCollapsed() - Crea un nuevo grupo en línea en el registro de la consola web
 * 
 * ___Funciones de Temporización___
 * - time() - inicia un temporizador
 * - timeEnd() - Registra el valor actual de un temporizado
 * - timeLog() - Detiene un temporizador
 */

/* No aparece nada ya que es verdadera */
console.assert(5>3);

/* Aparece un mensaje de error ya que es falsa */
console.assert(2>3);

/* clear limpia la consola, se suele usar en la propia consola */

if(2>1) {
    console.error("Che capo td bn?")
}

if(true) {
    console.info("Gano bocaaa")
}

console.log("Esto es para depuración, no informativo (por semantica)")

console.table(["Pepo", "Pepa", "Pepe", "Pipa"])

/* Una advertencia no es lo mismo que un error */
console.warn("Che maestro venis bien, pero tene cuidado porque...")

/* Nos dice las propiedades del objeto o arreglo, junto con indices y elementos */
console.dir(["Pepo", "Pepa", "Pepe", "Pipa"])

/* Esto es bueno por ejemplo para saber cuantas veces se ejecuto/paso algo */
console.count()
console.count()
console.count()
/* Se resetea */
console.countReset()
console.count()

/* Esto abre un grupo en la consola (una subconsola) */
console.group("Grupito")
/* Se puede poner un grupo en un grupo */
/* console.groupEnd("nombre") elimina al grupo */

/* console.groupCollapsed() es lo mismo que console.group solo que por defecto viene cerrado */

console.time()
const suma = (a,b) => {
    console.log(`${a} + ${b} = ${a+b}`);
    console.timeLog()
    console.timeEnd()
    return a+b;
}
suma(2,3);

/* Si despues de x tiempo ejecutamos: */
/* console.timeLog() */
/* Obtenemos esaa x cantidad de tiempo (lo ideal es hacer todo esto en consola) */

/* Y con console.timeEnd() se deja de contar el tiempo (se borra el console.time()) */

/* Se puede estilizar como si fuera un elemento en línea a la consola */
console.log(`%crancio`, `color:red`)