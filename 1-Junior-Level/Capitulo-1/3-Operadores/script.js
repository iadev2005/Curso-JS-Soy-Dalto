/* Los operadores aritméticos toman valores numéricos ya sean literales o variables como sus operandos y retornan un valor numérico único */

/* Operadores de asignación */

/* Asignación */
/* x = y */
/* Significado */
/* x = y */

/* Asignación de adicción */
/* x += y */
/* Significado */
/* x = x + y */

/* Asignación de sustracción */
/* x -= y */
/* Significado */
/* x = x - y */

/* Asignación de multiplicación */
/* x *= y */
/* Significado */
/* x = x * y */

/* Asignación de división */
/* x /= y */
/* Significado */
/* x = x / y */

/* Asignación de resto */
/* x %= y */
/* Significado */
/* x = x % y */

/* Asignación de exponenciación */
/* x **= y */
/* Significado */
/* x = x ** y */

/* Asignación de desplazamiento a la izquierda */
/* x <<= y */
/* Significado */
/* x = x << y */

/* Asignación de desplazamiento a la derecha */
/* x >>= y */
/* Significado */
/* x = x >> y */

/* Asignación sin signo de desplazamiento a la derecha */
/* x >>>= y */
/* Significado */
/* x = x >>> y */

/* Asignación AND */
/* x &= y */
/* Significado */
/* x = x & y */

/* Asignación XOR */
/* x ^= y */
/* Significado */
/* x = x ^ y */

/* Asignación XOR */
/* x ^= y */
/* Significado */
/* x = x ^ y */

/* Asignación OR */
/* x |= y */
/* Significado */
/* x = x | y */

let suma = 10;
suma +=5;
/* document.write nos escribe en html (con el ln nos dejamos un pequeño espacio */
document.writeln("El suma es: " + suma);

let resta = 10;
resta -=5;
document.writeln("La resta es: " + resta);

let mul = 10;
mul *=5;
document.writeln("La multiplicacion es: " + mul);

let division = 10;
division /= 2;
document.writeln("La division es: " + division);

let resto = 10;
resto %= 2;
document.writeln("El resto es: " + resto);

let potencia = 5;
potencia **=2;
document.writeln("La potencia es: " + potencia);

/* Las demás son operaciones avanzadas (por ahora) */

/* También podemos usar los operadores de esta forma */
/**
 * n1 = a
 * n2 = b
 * resultado = n1 (operador) n2
 */

/* Claro también tenemos otos operadores interesantes como el de incremento y el decremento */
incremento = 10;
r = incremento++;
document.writeln("El incremento es: " + incremento)

decremento = 10;
r = decremento--;
document.writeln("El decremento es: " + decremento)
