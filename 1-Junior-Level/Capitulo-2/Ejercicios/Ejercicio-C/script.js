/* Hacer una calculadora que nos simplifique las operaciones */

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const multiplicacion = (a,b) => a * b;
const division = (a,b) => (b !== 0 ? a / b : 'Error: División por cero') ;
const modulo = (a,b) => (b !== 0 ? a % b : 'Error: División cero');

const menu = () => {
    alert(`----- CALCULADORA -----\n1-Suma\n2-Resta\n3-Multiplicacion\n4-Division\n5-Modulo`);
    let opcion = parseInt(prompt(`Ingrese una opción:`));
    let a = parseInt(prompt(`Ingrese un numero a:`));
    let b = parseInt(prompt(`Ingrese un numero b:`));
    switch (opcion) {
        case 1:
            alert(suma(a,b));
            break;
        case 2:
            alert(resta(a,b));
            break; 
        case 3:
            alert(multiplicacion(a,b));
            break;
        case 4:
            alert(division(a,b));
            break; 
        case 5:
            alert(modulo(a,b));
            break;       
    
        default:
            alert(`Opción inválida`)
            break;
    }
}

menu();