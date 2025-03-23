// const ejecutarBucle = () => {
//     while (true) {
//         console.log(1);
//     }
// }

// Ahora vemos que los dos procesos si pueden ocurrir en simultaneo

// Para recibir el mensaje de postMessage
// addEventListener("message", ejecutarBucle);

addEventListener("message", e => {
    // console.log(e);
    // Con data se verifica lo que se recibio
    // console.log(e.data);
    // Tambien podemos responder
    if (e.data.length > 4) {
        // Mostrar el mensaje recibido
        console.log(e.data);
        postMessage("Todo bien papu");
    }
})