/* Antes de empezar, si bien JS no necesita del ";" es buena práctica utilizarlo */

/* Variable: Espacio de memoria donde se guardan datos */
recipiente = "papel";

/* Podemos re-asignarla */
recipiente = "Chicle";

/* Podemos imprimir el contenido */
/* alert("El recipiente tiene " + recipiente); */

/* Los tipos de datos principales son los siguientes */

/**
 * string
 * number
 * booleano
 */

string = "cadena de texto";
/* number = 19; */
/* Se puedo poner 0's y 1's o usar true y false */
booleano = 0;

/* Casos especiales */

/**
 * Undefined (variables indefinidas, no inicializadas)
 * Null
 * Nan
 */

/* Hay tres formas de declarar variables en JS */

/**
 * var (variable global)
 * let (variable de bloque)
 * const (constante)
 */

let numero = 15;
/* Las constantes no se pueden cambiar */
const pi = 3.14;

/* No es necesario darle un valor inicial a una variable, si no se le da un valor su valor por defecto es undefined */

let inicial;
/* alert("La variable esta: " + inicial); */

/* Scope es el contexto del programa, es decir el alcance de las variables, si son locales o globales */

/* También podemos crear múltiples variables */
let n, n2, n3;
n=1;
n2=2;
n3=3;

/* Le podemos dar su valor directamente */
let l=1, l2=2, l3=3;

/* La más común es esta (Deja el código mejor identado) */
let v1 = 32;
let v2 = 42;

/* Hoisting, básicamente como se interpretan los progamas, en este caso línea por línea, así que el orden importa */

/* Esto es tremenda boludez por ejemplo */
/* alert(mensaje); */
/* let mensaje= "Hola"; */

/* Ahora que joraca es Null y Nan */

/* Bueno null básicamente es una variables vacía (no indefinida) */

/* Como null es delicado en este caso ni se imprime */

/* let vacio=null; */
/* alert("Null: " + vacio); */

/* También podemos sumar y concatenar */
let number = 18;
let number2 = 1;
let sum = number + number2
let nombre = "Ignacio";
alert(nombre+" tiene: "+ sum);

/* Para operaciones entre cosas que no son números co  números (que no sea concatenar) se el error Nan (Not as Number) */
let numerito = 3
let texto = "pedro"
alert(texto*3)

/* Prompt es para hacer pruebas con JS, en este caso pedir valores desde la web */

let nombre2 = prompt("Che flaco pasame tu nombre")
alert("Alto capo sos "+ nombre2 )