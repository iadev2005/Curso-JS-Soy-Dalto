"strict mode";
const validarEdad = msg => {
    let edad;
    try {
        if (msg) edad = prompt(msg);
        else edad = prompt("Introduce tu edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw "Introduce un numero valido para la edad";
        if (edad >= 18) console.log("Sos mayor de edad");
        else console.log("Sos menor de edad");
    } catch(e) {
        validarEdad(e);
    }
    
}

const factorial = n => {
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}

// validarEdad();
console.log(factorial(5));