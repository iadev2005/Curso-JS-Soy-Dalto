/* Manera Antigua/Clásica de hacer funciones */

/* Función sin parámetros */
function saludoSimple() {
    alert(`Hola`);
}

/* Funcion con parámetro */
function saludar(nombre) {
    respuesta = prompt(`Hola ${nombre}, cómo fue tu día?`);
    if (respuesta == "bien") {
        alert(`Me alegro ${nombre}`);
    }
    else if (respuesta == "mal") {
        alert(`Me chupa un huevo ${nombre}`);
    }
    else {
        alert(`Alto trolo sos ${nombre}`);
    }
}
/* Tambi+en podemos asignarselas a variables */
s = saludar("Juan")
s;

/* saludar("Ignacio"); */

/* Función que retorna un valor */
function suma(a,b) {
    return a+b;
}

document.writeln(`<p>El resultado es (dos parámetros enviados): ${suma(5,3)}</p>`)

/* Si pasamos un solo valor se retorna NaN */
document.writeln(`<p>El resultado es (un parámetro enviado): ${suma()}</p>`)

/* Si no pasamos valores se retorna NaN */
document.writeln(`<p>El resultado es (ningún parámetro enviado): ${suma()}</p>`)

/* NOTA: Apenas una funcion retorne un valor es finalizada */

/* El scope básicamente son las funciones locales de la función... Es importante usar variables let denro de funciones */

/* Otra forma de crear funciones es con constantes (esto es copado, pero no mejor que las funciones flecha) */
const saludoProfesional = function(nombre) {
    let frase = `<p>Hola mi estimado <strong>Sr@. ${nombre}</strong></p>`;
    return frase;
}

/* Y las funciones flechas que esta recontracopadas */

/* Si usamos un solo parámetro no hace falta usar paréntesis, por ejemplo */

const saludoSimpleFlecha = nombre => {
    let frase = `<p>Hola <strong>${nombre}</strong></p>`;
    return frase;
};

document.writeln(saludoSimpleFlecha('capo'));

/* Si no usamos parámetros basta con paréntesis que no encierren a nada */
const saludoSimpleGenerico = () => {
    let frase = `<p>Hola</p>`;
    return frase;
};

document.writeln(saludoSimpleGenerico());

const saludoFlecha = (nombre)=> {
    let frase = `<p>Sos una flecha ${nombre}</p>`
    return frase;
}

document.writeln(saludoProfesional("Mondongo"));
/* Hecho con la función flecha */
document.writeln(saludoFlecha("Ignacio"))

/* También, si el cuerpo de nuestra función es una línea de código podemos simplificar aún más la función ya que se retorna automáticamente el valor en esa línea */

const holaSimple = hola => document.writeln("hola");

/* Para retornar */
const sumaSimple = (a,b) => a+b
const holaSuperSimple = () => `<p>Hola</p>`
document.writeln(`La suma de 3 y 5 es: ${sumaSimple(3,5)}`)
document.writeln(`Saludo simple: ${holaSuperSimple()}`)

/* A partir de este momente usaremos las funciones flechas como las principales */