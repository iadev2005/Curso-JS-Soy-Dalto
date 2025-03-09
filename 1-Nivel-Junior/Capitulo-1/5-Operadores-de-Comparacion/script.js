/* Operadores de comparación, devuelven un valor booleano dependiendo si se cumple la expresión o no */
/* Equality (a == b) */
/* Inequality (a != b) */
/* Identify (a === b) */
/* Non-Identify (a !== b) */
/* Greather than (a > b) */
/* Greather than or equal (a >= b) */
/* Less than (a < b) */
/* Less than or equal (a <= b) */

let n1= 23;
let n2= 13;

/* Esto es falso */
document.writeln(`Che ${n1} y ${n2} son iguales? ${n1==n2}`);

/* Esto es true */
document.writeln(`Che ${n1} y ${n2} son diferentes? ${n1!=n2}`);

/* Tambien funciona con textos */
let t1= "Papu";
let t2= "Papa";
/* falso */
document.writeln(`Che ${t1} y ${t2} son iguales? ${t1==t2}`);
/* true */
document.writeln(`Che ${t1} y ${t2} son diferentes? ${t1!=t2}`);

/* Esto "===" lo que compara es que sean estrictamente iguales, es decir que sean lo mismo, y además del mismo tipo de dato, por extensión "!==" esto compara que no sean lo mismo */
t1="23";
/* falso */
document.writeln(`Che ${t1} y ${n1} son estrictamente iguales? ${t1===n1}`);

/* true (son iguales, sin embargo no son el mismo tipo de dato, así que son diferentes) */
document.writeln(`Che ${t1} y ${n1} no son estrictamente iguales? ${t1!==n1}`);

/* Y bueno los típicos comparadores matemáticos */
/* verdadero */
document.writeln(`Che ${n1} es mayor que ${n2}? ${n1>n2}`);
/* verdadero */
document.writeln(`Che ${n1} es mayor igual que ${n2}? ${n1>=n2}`);
/* falso */
document.writeln(`Che ${n1} es menor que ${n2}? ${n1<n2}`);
/* falso */
document.writeln(`Che ${n1} es menor igual que ${n2}? ${n1<=n2}`);