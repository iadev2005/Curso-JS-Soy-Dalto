class animal {
    constructor(edad, color) {
        this.edad = edad;
        this.color = color;
    }
    
    /* Los métodos estáticos son aquellos que no tienen que ver con los atributos de la clase, envejecer usa un atributo de la clase, así que no se puede volver un método estático */
    envejecer() {
        this.edad++;
    }

    toString() {
        return `Edad: ${this.edad}, Color: ${this.color}`;
    }
}

class canino extends animal {
    /* También se pueden hacer atributos static, estos son buenos por ejemplo para saber el número de cada objeto instanciado de esa clase, técnimante no son atributos propios de la clase */
    // static n_canino;

    constructor(edad, color, raza) {
        super(edad,color);
        this.raza = raza;
    }

    /* Sin embargo ladrar no usa los atributos de la clase, así que es lógico transformarlo en un método estático */
    
    // ladrar() {
    //     return `Waow waow`
    // }

    static ladrar() {
        return `Waow waow`;
    }

    /* Getters and Setters (Para obtener y modificar valores), en caso de que los datos esten encapsulados */
    set setEdad(edad) {
        this.edad = edad;
    }

    get getEdad() {
        return this.edad;
    }

    toString() {
        return `Edad: ${this.edad}, Color: ${this.color}, Raza: ${this.raza}`;
    }
}
/* Lo ideal es definir los objetos como const */
const perro = new canino(12,"marron", "Beagle");
/* Así se suelen usar los setters and getters */
perro.setEdad = 7;
document.writeln(`<p>${perro}</p>`)

/* No hace falta especificar que el objeto haga la acción, solo la clase */
document.writeln(`<p>${canino.ladrar()}</p>`)

document.writeln(`<p>Edad del perro con get: ${perro.getEdad}</p>`)