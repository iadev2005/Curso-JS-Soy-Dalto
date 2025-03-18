/**
 * Las funciones asincronas trabajan en tiempo real, las promesas son funciones asincronas
 * - Usos
 * - Operador Await
 */

// const objeto = {
//     propiedad1 : "valor1",
//     propiedad2 : "valor2",
//     propiedad3 : "valor3"
// };

// Para simular un servidor
// Los datos son undefined, ya que el objeto tomara el valor de los datos solo se pasa 1s, como ese tiempo no paso en la asignacion sera undefined
// const obtenerInformacion = () => {
//     setTimeout(() => {
//         return objeto
//     }, 1000)
// }

// Este escenario se podria manejar con promesas
// const obtenerInformacion = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(objeto)
//         }, 1000)
//     })
// }

// Despues de 1s lo muestra
// obtenerInformacion().then(resultado => console.log(resultado))

// console.log(obtenerInformacion());

// Pero que pasaría si estamos esperando informacion en tiempo real de un servidor?

// Lo anterior resuelve el problema, pero no es optimo

// Esto solo es valido para funciones asincronas
// resultado = await obtenerInformacion();

// Si la funcion es normal
// async function mostrarResultado() {
    
// } 

// Si es una funcion flecha
// const mostrarResultado = async() => {
//     resultado = await obtenerInformacion();
//     console.log(resultado);
// }

// mostrarResultado();

// Para ver mejor la utilidad es bueno el siguiente ejemplo
const obtenerInformacion = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(text)
        }, Math.random()*200)
    })
}

// Teoricamente el tiempo de espera es random, como estamos simulando a un servidor, el problema de esto es que los datos estarian de manera desordenada
// obtenerInformacion("1: Messi").then(resultado => console.log(resultado));
// obtenerInformacion("2: Ronaldo").then(resultado => console.log(resultado));
// obtenerInformacion("3: Neymar").then(resultado => console.log(resultado));

const mostrarResultado = async() => {
    // Usamos await para que no nos devuelva una promesa
    data1 = await obtenerInformacion("1: Messi");
    data2 = await obtenerInformacion("2: Ronaldo");
    data3 = await obtenerInformacion("3: Neymar");
    // Siempre devuelve la info en orden, ya que espera a que toda la informacion se reciba, luego con await accedemos al valor de la promesa y decidimos que haremos con esos valores, una promesa es como "Te prometo que lo vas a tener, no se si sera bueno o malo, pero lo vas a tener, en algunos casos en x tiempo"
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarResultado();

