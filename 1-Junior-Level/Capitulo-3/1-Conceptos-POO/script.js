/* Es uno de los tantos paradigmas de la programación básicamente consiste en programar las cosas como si fueran objetos de la vida real */

/* Clase es como una fábrica de objetos */

/* Los objetos son instancias de la clase */

/* Los atributos son las propiedades del objeto */

/* Los métodos son las acciones que puede realizar el objeto */

/* El constructor es donde se definen los atributos del objeto */

class animal {

    constructor(especie, edad, color) {
        /* Lo bueno es que todo esto yo ya lo ví en clases */
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }

    /* Método (no pueden ser funciones flecha) */

    hacerSonido() {
        alert("sonido");
    }

    envejecer() {
        this.edad++;
    }

    /* Redefinimos el método toString() para que al imprimir el objeto imprima a sus propiedades */
    toString() {
        return `Especie: ${this.especie}, Edad: ${this.edad}, Color: ${this.color}`
    }
}

/* Instanciando la clase */
let perro = new animal("canino", 7, "marrón");
/* Para mostrar en consola */
console.log(perro);

/* Si queremos imprimirlo tenemos dos opciones */

/* Sobre-escribiendo el método toString() */
alert(perro);

/* Poco a poco por sus atributos */
alert(`Especie: ${perro.especie}, Edad: ${perro.edad}, Color: ${perro.color}`)

perro.hacerSonido;
