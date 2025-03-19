/* Los operadores lógicos nos devuelven un resultado a partir de que se cumpla (o no) una condición, su resultado es booleano, y sus operandos osn valores l+ogicos o asimilables a ellos */

/* Son los siguientes: */

/* Operador AND && */
/* Operador OR || */
/* Operador NOT ! */

let n1=true, n2=true;
/* Como ambos son true es true */
let resultado = n1 && n2;
document.writeln(`El resultado de n1 y n2 es: ${resultado}`);

n1= false;
/* Como es el operador OR basta con que uno sea true */
resultado= n1 || n2;
document.writeln(`El resultado de n1 o n2 es: ${resultado}`);

/* Como anteriormente era true, su negación es false */
resultado= !n2;
document.writeln(`El resultado de no n2 es: ${resultado}`);

