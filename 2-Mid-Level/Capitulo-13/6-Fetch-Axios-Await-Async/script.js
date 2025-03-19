/**
 * Fetch y Axios con Await y Async
 * - Implementacion
 * -Importancio del try catch
 */

// Esto como no tiene async no espera, al no esperar sucede un error con las promesas
// const getName = () => {
//     fetch("informacion.txt")
//         .then(res => {
//             if (res.ok) Promise.resolve(res);
//             else Promise.reject(res);
//         })
//         .then(res => console.log(res))
//         .catch(e => console.log(e))
// }

const getName = async () => {
    try {
        let resultado = await axios("informacion.txt");
        let HTMLNombre = `<p>Nombre: ${resultado.data.Nombre}</p>`;
        let nombreDiv = document.querySelector(".nombre");
        nombreDiv.style.display = 'block';
        nombreDiv.innerHTML += HTMLNombre; 
    } catch (error) {
        console.error("Error al obtener el nombre:", error);
    }
}

const getAge = async () => {
    try {
        let resultado = await axios("informacion.txt");
        let HTMLEdad = `<p>Edad: ${resultado.data.Edad}</p>`;
        let edadDiv = document.querySelector(".edad");
        edadDiv.style.display = 'block';
        edadDiv.innerHTML += HTMLEdad; 
    } catch (error) {
        console.error("Error al obtener la edad:", error);
    }
}

// Event listeners para los botones
document.getElementById(`getNombre`).addEventListener("click", getName);
document.getElementById(`getEdad`).addEventListener("click", getAge);