/* Se suele trabajar en los .json */

/* En los arrays asociativos asociamos una referencia con un valor */

let pc = {
    nombre: "IAPC",
    procesador: "Intel Core 17",
    ram: "16GB",
    espacio: "1TB"
}

/* Solo imprime la sintaxis */
/* document.writeln(pc) */

/* Para imprimir un campo */
document.writeln(pc["nombre"]);

/* Así con todos los campos */

let nombre  = pc["nombre"];
let procesador  = pc["procesador"];
let ram  = pc["ram"];
let espacio  = pc["espacio"];

let text = `<br>El nombre de mi PC es: ${nombre} <br>El procesador es: ${procesador} <br>La memoria ram es:${ram} <br>El espacio en disco es de: ${espacio}`;
document.write(text);