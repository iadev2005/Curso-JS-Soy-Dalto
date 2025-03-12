/**
 * Abstracción: Reducir la complejidad del objeto lo máximo posible
 * Modularidad: Capacidad de resolver un problema grande separándolo por   partes
 * Encapsulamiento: Privacidad de los atributos (datos) del objeto
 * Polimorfismo: Consiste en ver como un objeto se comportará distinto ante un mismo método
 */

/* Podemos usar el concepto de la herencia */

class animal {
    constructor(edad, color) {
        this.edad = edad;
        this.color = color;
    }
    
    envejecer() {
        this.edad++;
    }

    toString() {
        return `Edad: ${this.edad}, Color: ${this.color}`;
    }
}

class canino extends animal {
    constructor(edad, color, raza) {
        super(edad,color);
        this.raza = raza;
    }

    ladrar() {
        return `Waow waow`
    }

    toString() {
        return `Edad: ${this.edad}, Color: ${this.color}, Raza: ${this.raza}`;
    }
}

let perro = new canino(12,"marron", "Beagle");
document.writeln(`<p>${perro}</p>`)

/* Importante no se puede tener un objeto con el mismo nombre de la clase */

document.writeln(`<p>${perro.ladrar()}</p>`)