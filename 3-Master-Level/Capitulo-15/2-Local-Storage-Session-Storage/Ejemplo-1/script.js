/**
 * LocalStorage y  SessionStorage
 * - diferencias
 * - setItem
 * - getItem()
 * - removeItem()
 * - clear
 * - Ejemplo de uso (Idioma)
 */

// La diferenecia entre las dos es que una (Session Storage) al recargarla o salir se pierde la información, la otra no la pierde (LocalStorage)

// Como es localStorage no se perderán los datos

// El length de la Storage son la cantidad de elementos que tiene
console.log(localStorage);
// Ahora ese guardo una variable llamada nombre con el valor pedro en localStorage
localStorage.setItem("nombre", "pedro");
localStorage.setItem("apellido", "hernandez");
localStorage.removeItem("apellido");
console.log(localStorage);
console.log(localStorage.getItem("nombre"));

// clear quita a todos los item
localStorage.clear();
console.log(localStorage);

// Como es sessionStorage si se pueden perder los datos
console.log(sessionStorage);
sessionStorage.setItem("nombre", "Juan")
console.log(sessionStorage.getItem("nombre"));