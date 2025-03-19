subtitulo = `While`;
document.writeln(`<h2>${subtitulo}</h2>`);
/* Hay 5 principales tipos de bucle: */
/* while, do while, for, for in y for of */

let nParaSumar = 0;
/* Bucle While */
/* Primero se pregunta después se ejecuta */
while (nParaSumar < 10) {
    nParaSumar++;
    document.writeln(`<p>${nParaSumar}</p>`)
}

subtitulo = `Do-While`;
document.writeln(`<h2>${subtitulo}</h2>`);
nParaSumar = 0;

/* Bucle do-while */
/* Primero ejecuta luego pregunta */
do {
    nParaSumar++;
    document.writeln(`<p>${nParaSumar}</p>`)
}

while (nParaSumar <= 6)

/* break termina la sentencia */
subtitulo = `While con break`;
nParaSumar = 0;
document.writeln(`<h2>${subtitulo}</h2>`);

while (nParaSumar < 10) {
    nParaSumar++;
    if (nParaSumar == 5) {
        document.writeln(`<p>El valor es ${nParaSumar}, se rompio el bucle</p>`);
        break;
    }
    document.writeln(`<p>${nParaSumar}</p>`);
}

/* Bucle For con continue */
subtitulo = `Bucle for`;
document.writeln(`<h2>${subtitulo}</h2>`);

for (let i = 0; i<=10 ; i++) {
    /* Si nos queremos saltar un valor usamos continue */
    if (i==5) {
        /* Nos saltamos el 5 */
        continue;
    }
    document.writeln(`<p>El valor de i es ${i}</p>`);
}

/* Otra forma de hacer un bucle for: */
/* let variable = valor */
/* for (variable; variable_condicion; variable_accion) {
    ...
} */

/* Bucle For In */
subtitulo = `Bucle for in`;
document.writeln(`<h2>${subtitulo}</h2>`);
let animales = ["cat", "dog", "lion", "monkey", "horse"];
/* Esto es para demostrar que bucle for in además del índice y el objeto, también nos da los atributos del objeto */
animales.tamano = "grande"


/* Por como funciona "in" lo que me devolverá será la posición */
for (animal in animales) {
    /* Cuando accedamos a la porpiedad de .tamano imprimira su nombre */
    document.writeln(`<p>El indice que contiene al animal es ${animal}</p>`);
}

/* Mostrando contenido con for in */
subtitulo = `Bucle for in mostrando contenido`;
document.writeln(`<h2>${subtitulo}</h2>`);
let comentario=`Si queremos mostrar el nombre del animal con for in usamos nombreArreglo[variableQueRecorre]`
document.writeln(`<h3>${comentario}</h3>`);
for (animal in animales) {
    /* Cuando accedamos a la porpiedad de .tamano imprimira su valor */
    document.writeln(`<p>El nombre del animal es <strong>${animales[animal]}</strong></p>`)
}

/* Bucle For Of */
/* Solo nos devuelve el valor de los elemento del arreglo */
subtitulo = `Bucle for of`;
document.writeln(`<h2>${subtitulo}</h2>`);
/* Por como funciona "of" lo que me devolverá será el contenido en las posiciones del arreglo (los nombres de los animales) */
for (animal of animales) {
    document.writeln(`<p>El animal se llama <strong>${animal}</strong></p>`);
}

/* Podemos escribir tamano directamente también */
subtitulo = `Accediendo directamente a tamaño`;
document.writeln(`<h2>${subtitulo}</h2>`);
document.writeln(`<strong>${animales.tamano}</strong>`);

/* Label permite asociar un arreglo a un nombre */
let array1 = ["maria", "josefa", "roberta"];
let array2 = ["pedro", "marcelo", array1];

subtitulo = `Recorriendo Arreglo dentro de Arreglo usando "in" y "of"`;
document.writeln(`<h2>${subtitulo}</h2>`);

/* Basicamente en el momento que identificamos que estamos en otro array lo recorremos, cuando lo terminamos de hacer seguimos con el siguiente elemento */

/* Bueno supongamos que queremos cortar el bucle cuando encontremos el sub-array, si usamos un break en esa condición el bucle continuaría, entonces para indicarle que for debe romperse usamos un label */
for (let recorridoArray in array2) {
    if (recorridoArray == 2) { /* Como usamos in estamos comprobando si el índice es 2, si es 2 sabemos que hay otro array */
        for (let recorridoArray of array1){ /* Luego usamos "of" para ver que elementos tiene ese sub-array */
            document.writeln(`<p>Array 1: ${recorridoArray}</p>`);
        }
    } else { /* De lo contrario imprimimos los elementos de nuestro array original con la manera que ya sabemos usando "in" */
        document.writeln(`<p>Array 2: ${array2[recorridoArray]}</p>`);
    }
}

/* Bueno supongamos que queremos cortar el bucle cuando encontremos el sub-array, si usamos un break en esa condición el bucle continuaría, entonces para indicarle que for debe romperse usamos un label */

array2 = ["pedro", "marcelo", array1, "Juana"];
subtitulo = `Usando un label con break para romper cuando se encuentre el sub-array`;
document.writeln(`<h2>${subtitulo}</h2>`);

forPrincipal: for (let recorridoArray in array2) {
    if (recorridoArray == 2) { /* Como usamos in estamos comprobando si el índice es 2, si es 2 sabemos que hay otro array */
        for (let recorridoArray of array1){ /* Luego usamos "of" para ver que elementos tiene ese sub-array */
            document.writeln(`<p>Array 1: ${recorridoArray}</p>`);
            break forPrincipal;
            /* Si queremos saltarnos el arreglo usamos continue */
        }
    } else { /* De lo contrario imprimimos los elementos de nuestro array original con la manera que ya sabemos usando "in" */
        document.writeln(`<p>Array 2: ${array2[recorridoArray]}</p>`);
    }
}