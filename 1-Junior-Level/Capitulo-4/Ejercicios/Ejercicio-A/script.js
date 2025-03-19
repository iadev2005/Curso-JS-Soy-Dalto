class Calculadora {
    static suma(a, b) {
        return a + b;
    }

    static resta(a, b) {
        return a - b;
    }

    static multiplicacion(a, b) {
        return a * b;
    }

    static division(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return 'Error: División por cero';
        }
    }

    static modulo(a, b) {
        if (b !== 0) {
            return a % b;
        } else {
            return 'Error: División por cero';
        }
    }

    static potencia(a, b) {
        return a ** b;
    }

    static raizCuadrada(a) {
        return Math.sqrt(a);
    }

    static raizCubica(a) {
        return Math.cbrt(a);
    }
}

const menu = () => {
    let opcion;

    do {
        opcion = parseInt(prompt(`----- CALCULADORA -----\n` +
            `1. Suma\n` +
            `2. Resta\n` +
            `3. Multiplicación\n` +
            `4. División\n` +
            `5. Módulo\n` +
            `6. Potencia\n` +
            `7. Raíz Cuadrada\n` +
            `8. Raíz Cúbica\n` +
            `0. Salir\n` +
            `Ingrese una opción:`));

        if (opcion === 0) {
            alert("Gracias por usar la calculadora.}");
            break;
        }

        let a, b;

        if (opcion >= 1 && opcion <= 6) {
            a = parseFloat(prompt(`Ingrese un número a:`));
            b = parseFloat(prompt(`Ingrese un número b:`));
        } else if (opcion === 7 || opcion === 8) {
            a = parseFloat(prompt(`Ingrese un número:`));
        }

        let resultado;

        switch (opcion) {
            case 1:
                resultado = Calculadora.suma(a, b);
                break;
            case 2:
                resultado = Calculadora.resta(a, b);
                break;
            case 3:
                resultado = Calculadora.multiplicacion(a, b);
                break;
            case 4:
                resultado = Calculadora.division(a, b);
                break;
            case 5:
                resultado = Calculadora.modulo(a, b);
                break;
            case 6:
                resultado = Calculadora.potencia(a, b);
                break;
            case 7:
                resultado = Calculadora.raizCuadrada(a);
                break;
            case 8:
                resultado = Calculadora.raizCubica(a);
                break;
            default:
                alert(`Opción inválida`);
                continue;
        }

        alert(`El resultado es: ${resultado}`);
    } while (opcion !== 0);
}

menu();