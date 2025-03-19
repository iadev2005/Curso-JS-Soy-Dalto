/**
 * ___ Transformadores ___
 * - pop() - Elimina el último elemento de un array y lo devuelve
 * - shift() - Elimina el primer elemento de un array y lo devuelve
 * - push() - Agrega un elemento al array al final de la lista
 * - reverse() - Invierte el oreden de los elementos de un array
 * - unshift() - Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array
 * - sort() - ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado
 * - splice() - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
 * 
 * ___ Accesores ___
 * - join() - Une todos los elementos en una matriz (u objeto similar) en una cadena y la devuelve
 * - slice() - Devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
 * - Los demás son métodos de cadenas que ya vimos
 * 
 * ___ De Repeticion ___
 * filter() - crea un nuevo array con todos los elementos que cumplan la condición (recopado)
 * forEach() - ejecuta la función indicada una vex por cada elemento del array 
 */

/* NOTA: Es buena práctica definir el array como const al parecer */
const nombres = ["pedro", "maria", "jorge"];

document.writeln(`<h2>Arreglo original</h2>`)
document.writeln(`<p>${nombres}</p>`)

let resultado;

resultado = nombres.pop();
document.writeln(`<h2>Pop (eliminando último elemento)</h2>`);
document.writeln(`<p>Se elimino ${resultado}</p>`)
document.writeln(`<p>Quedo: ${nombres}</p>`)

resultado = nombres.shift();
document.writeln(`<h2>Shift (eliminando primer elemento)</h2>`);
document.writeln(`<p>Se elimino ${resultado}</p>`)
document.writeln(`<p>Quedo: ${nombres}</p>`)

resultado = nombres.push("jose");
document.writeln(`<h2>Push (añadiendo en la última posición)</h2>`);
document.writeln(`<p>La cantidad de elementos es: ${resultado}</p>`)
resultado = nombres.push("ernesto");
document.writeln(`<p>La cantidad de elementos es: ${resultado}</p>`)
document.writeln(`<p>${nombres}</p>`)

nombres.reverse();
document.writeln(`<h2>Reverse (invirtiendo el orden de los elementos en el array)</h2>`);
document.writeln(`<p>${nombres}</p>`)

nombres.unshift("pepe","messi");
document.writeln(`<h2>Unshift (añadiendo uno o más elementos en el inicio del array)</h2>`);
document.writeln(`<p>${nombres}</p>`)

/* Si ajustamos los parámetros podríamos hacer cosas bastante diferentes, pero en general lo más normal es organizar numeros de menor a mayor (o al revés) y organizar de manera alfabética, depende del tipo de dato almacenado */
nombres.sort();
document.writeln(`<h2>Sort (ordenando alfabéticamente los elementos en el array)</h2>`);
document.writeln(`<p>${nombres}</p>`)

/* splice funciona con tres parámetros, la posición en el arreglo a partir donde se hara el splice, la cantidad de elementos a eliminar en esa posición (si el valor es 0 simplemente no se eliminarán) y los n items que se reemplazarán o añadiran (dependiendo del contexto) en esa posición (también podemos indicar la posición con índice negativo, este va desde el final de la posición hasta el inicio, por ejemplo -1 significa que estamos en el final del arreglo, -2 en la penúltima posición y así sucesivamente) */
nombres.splice(1, 0, "mario", "alfonso");
document.writeln(`<h2>Splice (añadiendo/reemplzando en unna posición n de items)</h2>`);
document.writeln(`<p>${nombres}</p>`)

/* join es basicamente un transformador de arreglo a cadena donde se puede poner un separador */
resultado = nombres.join(`-`);
document.writeln(`<h2>Join (transformando el array en una cadena)</h2>`);
document.writeln(`<p>${resultado}</p>`)

/* slice es básicamente lo mismo que join, solo que puede recortar el contenido, el primer párametro es la posición inicial y el segundo los n elementos siguientes */
resultado = nombres.slice(0,2);
document.writeln(`<h2>Slice (transformando el array recortado en una cadena)</h2>`);
document.writeln(`<p>${resultado}</p>`)

/* Todos los métodos de cadena (o al menos la mayoría) se pueden usar en los arrays) */

/* para indicar la condición podemos usar una función flecha, si la función es true cumple la condición, también podemos usar funciones normales, pero ya que es una sola línea conviene la flecha */
resultado = nombres.filter((nombre) => nombre.length>=5);
document.writeln(`<h2>Filter (creando un nuevo array con todos los elementos que cumplan la condición)</h2>`);
document.writeln(`<p>${resultado}</p>`)


document.writeln(`<h2>ForEach (usando una función/método una vez por cada elemento en el array)</h2>`);
/* JS interpreta que el primer valor es el contenido y que el segundo es el índice */
resultado = nombres.forEach((nombre, indice) => document.writeln(`<p>${indice}: ${nombre}</p>`))