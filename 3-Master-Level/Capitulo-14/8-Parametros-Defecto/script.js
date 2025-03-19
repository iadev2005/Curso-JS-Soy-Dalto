"strict mode ";

// const suma = (a, b) => {
//     return a + b;
// }

// Con esto todo esta ok
// suma(10,12);

// Hasta ahora si definiamos menos parametros de los que necesitaba la función teniamos un error

// suma(10);

// Tenemos 3 formas de solucionarlo

// Con operadores ternarios
// const suma = (a, b) => {
//     b = typeof b !== 'undefined' ? b : 0;
//     console.log(a+b);
// }

// const suma = (a, b) => {
//     b = b || 0;
//     console.log(a+b);
// }

// La manera más recomendada es la siguiente
const suma = (a=0, b=0) => {
    console.log(a+b);
}

suma(10);