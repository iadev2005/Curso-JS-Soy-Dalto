/**
 * Problema A)
 * - Mostrarle las particularidades de los 3 celulares
 * - Cada uno debe tener color, peso, resolución de pantalla, cámara y memoria RAM
 * - Deben poder prender, reiniciar, tomar fotos y grabar
 */

/* NOTA: las clases empiean siempre en mayúscula */
class Celular {
    constructor(color, peso, resolucion, camara, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.ram = ram;
        /* Por defecto esta apagado */
        this.encendido = false;
        /* Por defecto no hay aplicaciones */
        this.aplicaciones = []; 
    }

    prender() {
        if (this.encendido == false) {
            alert(`Prendiendo celular`);
            this.encendido = true;
        }
        else {
            alert(`El celular ya estaba encendido`);
        }
    }

    apagar() {
        if (this.encendido == true) {
            alert(`Apagando celular`);
            this.encendido = false;
        }
        else {
            alert(`El celular ya estaba apagado`);
        }
    }

    reiniciar() {
        if (this.encendido == true) {
            alert(`Reiniciando celular`)
            this.apagar();
            this.prender();
        }
        else {
            alert(`El celular esta apagado`)
        }
    }

    foto() {
        if (this.encendido == true) {
            alert(`Foto tomada con una resolución de: ${this.resolucion}`);
        }
        else {
            alert(`El celular no esta prendido`)
        }
    }

    grabar() {
        if (this.encendido == true) {
            alert(`Grabando con una resolución de: ${this.resolucion}`);
        }
        else {
            alert(`El celular no esta prendido`)
        }
    }

    instalarAplicacion(aplicacion) {
        this.aplicaciones.push(aplicacion);
        alert(`Aplicación instalada: ${aplicacion.toString()}`);
    }

    desinstalarAplicacion(nombreAplicacion) {
        for (let i=0; i<this.aplicaciones.length; i++) {
            if (this.aplicaciones[i].nombre == nombreAplicacion) {
                alert(`Se eliminará la aplicación ${nombreAplicacion}`)
                this.aplicaciones[i] = null;
                return;
            }
        }
        alert(`No se encontro la aplicación ${nombreAplicacion}`)
    }


    abrirAplicacion(nombre) {
        if (this.encendido) {
            for (let i = 0; i < this.aplicaciones.length; i++) {
                if (this.aplicaciones[i].nombre === nombre) {
                    alert(`${this.aplicaciones[i].nombre} se abrio`)
                    this.aplicaciones[i].abrir();
                    return; 
                }
            }
            alert(`No se encontró la aplicación: ${nombre}`);
        } else {
            alert(`El celular no está prendido`);
        }
    }

    cerrarAplicacion(nombre) {
        if (this.encendido) {
            for (let i = 0; i < this.aplicaciones.length; i++) {
                if (this.aplicaciones[i].nombre === nombre) {
                    alert(`${this.aplicaciones[i].nombre} se cerro`)
                    this.aplicaciones[i].cerrar();
                    return; 
                }
            }
            alert(`No se encontró la aplicación: ${nombre}`);
        } else {
            alert(`El celular no está prendido`);
        }
    }

    toString() {
        if (this.aplicaciones.length==0) {
            return `Celular { Color: ${this.color}, Peso: ${this.peso}g, Resolución: ${this.resolucion}, Cámara: ${this.camara}MP, RAM: ${this.ram}GB, Encendido: ${this.encendido}, Aplicaciones: Ninguna}`;
        } else {
            return `Celular { Color: ${this.color}, Peso: ${this.peso}g, Resolución: ${this.resolucion}, Cámara: ${this.camara}MP, RAM: ${this.ram}GB, Encendido: ${this.encendido}, Aplicaciones: ${this.aplicaciones} }`;
        }
        
    }
}

/**
 * Problema B)
 * - El boludo de cofla quiere celulares de alta gama, así que toca implementar todas estas cualidades en los celulares de alta gama
 */

/* NOTA: Las variables en JS siguen la convención camelCase */
class CelularGamaAlta extends Celular {
    constructor(color, peso, resolucion, camara, ram, rce) {
        super(color, peso, resolucion, camara, ram)
        this.rce = rce;
    }

    grabarCamaraSuperLenta () {
        if (this.encendido == true) {
            alert(`Grabando en cámara super lenta con una resolución de: ${this.resolucion}`);
        }
        else {
            alert(`El celular no esta prendido`);
        }
    }
    
    reconocimientoFacial() {
        if (this.encendido == true) {
            alert("Iniciando reconocimiento facial");
        }
        else {
            alert(`El celular no esta prendido`);
        }
    }

    fotoCamaraExtra() {
        if (this.encendido == true) {
            alert(`Foto con cámara extra tomada con una resolución de: ${this.rce}`);
        }
        else {
            alert(`El celular no esta prendido`)
        }
    }

    toString() {
        if (this.aplicaciones.length == 0) {
            return `Celular { Color: ${this.color}, Peso: ${this.peso}g, Resolución: ${this.resolucion}, Cámara: ${this.camara}MP, RAM: ${this.ram}GB, Encendido: ${this.encendido}, Aplicaciones: Ninguna, Resolución Cámara Extra: ${this.rce} }`;
        } else {
            return `Celular { Color: ${this.color}, Peso: ${this.peso}g, Resolución: ${this.resolucion}, Cámara: ${this.camara}MP, RAM: ${this.ram}GB, Encendido: ${this.encendido}, Aplicaciones: ${this.aplicaciones}, Resolución Cámara Extra: ${this.rce} }`;
        }
        
    }
}

/**
 * - Ahora el boludo de Cofla quiere aplicaciones, así que toco crear una clase aplicaciones, integrar a las aplicaciones como atributo, y luego pasar esos métodos a celular
 */

class Aplicacion {
    constructor(descargas, puntuacion, peso, nombre) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        /* Esta cerrada */
        this.abierta = false;
        this.nombre = nombre;
    }

    abrir() {
        if (this.abierta == false) {
            alert(`Abriendo aplicación`)
            this.abierta = true;
        }
        else {
            alert(`La aplicación ya estaba abierta`)
        }
    }

    cerrar() {
        if (this.abierta == true) {
            alert(`Cerrando aplicacion`)
            this.abierta = false;
        }
        else {
            alert(`La aplicación estaba cerrada`)
        }
    }

    toString() {
        return `Aplicación { Nombre: ${this.nombre}, Descargas: ${this.descargas}, Puntuación: ${this.puntuacion}, Peso: ${this.peso}MB }`;
    }

}

const celular1 = new Celular("Negro", 180, "1920x1080", 12, 6);
const celular2 = new CelularGamaAlta("Blanco", 160, "2560x1440", 10, 4, "1280x720");

const app1 = new Aplicacion(10000, 4.5, 200, "Instagram");
const app2 = new Aplicacion(5000, 4.2, 150, "Facebook");
const app3 = new Aplicacion(3000, 4.0, 100, "YouTube");

celular2.instalarAplicacion(app1);
celular2.instalarAplicacion(app2);
celular2.instalarAplicacion(app3);
celular2.desinstalarAplicacion("Instagram")

document.writeln(`<h2>Características del celular 1:</h2>`);
document.writeln(celular1.toString());
// document.writeln(`<h3>Aplicaciones del celular 1:</h3>`);
// document.writeln(celular1.mostrarAplicaciones())

document.writeln(`<h2>Características del celular 2 (Gama Alta):</h2>`);
document.writeln(celular2.toString());

celular1.prender();
celular1.reiniciar();
celular1.foto();
celular1.grabar();

celular2.prender();
celular2.reconocimientoFacial();
celular2.fotoCamaraExtra();

/* Falto el sistema de recomendaciones, pero alto paja. Aplice los principios solid, y obviamente es el propio celular que debe instalar las apps */