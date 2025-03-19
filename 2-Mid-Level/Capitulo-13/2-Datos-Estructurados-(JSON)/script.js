/**
 * Datos Estructurados (JSON)
 * - Definición, Usos y Sintaxis
 * - Serialización y Deserialización
 * - Método parse() - Convierte un string con estructura JSON a formato JS (deserializar)
 * - Método stringify() - Convierte un dato de JS en una cadena de texto JSON (serializar)
 * - JSON PolyFill - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify (Esto es para internet explorer, o navegadores viejos, simula el JSON)
 */

// Los json contienen arrays asociativos, no como la maramusa que hacemos para hacer algo parecido directamente desde JS vanilla

// Si el JSON esta serializado, es una cadena de texto con formato JSONs

let objetoDeserializado = {
    "variable1" : "PEDRO",
    "variable2" : "JORGE"
}

// Si le quitamos las comillas seria deserializado
// Se suelen recibir así cuando los trabajamos, y cuando ya los recibimos los deserializamos
let objetoSerializado = `{
    "variable1" : "PEDRO",
    "variable2" : "JORGE"
}`;

// Pasando de deserializado a serializado
const conversion1 = JSON.stringify(objetoDeserializado);
// Pasando de serializado a deserializado
const conversion2 = JSON.parse(objetoSerializado);

// Mostrando conversiones
console.log(typeof conversion1);
console.log(typeof conversion2);
console.log(conversion2.variable1);

// Se puede acceder de manera directa si esta deserializado
// console.log(objetoDeserializado.variable1);