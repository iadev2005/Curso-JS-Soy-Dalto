/**
 * IndexedDB
 * - Caracteristicas
 *      - Almacena informacion en el navegador de forma similar a localStorage
 *      - Es orientada a objetos
 *      - Es asincrona
 *      - Trabaja con eventos del doom
 * - Procedimiento de Creacion
 *      - Objeto IndexedDB
 *      - Metodo open()
 *      - onupgradeneeded, onsucess, onerror
 * - Crear Almacen de Objetos
 *      - Almacen de objetos - Arquitectura que nos permite almacenar datos como objetos
 *      - Metodo createObjectStore()
 *      - autoIncrement vs KeyPath
 * - Almacenar Objetos
 *      - Metodo transaction()
 *      - IDBTransaction.objectStore()
 *      - IDBObjectStore.add()
 * - Modificar Objetos
 *      - IDBObjectStore.put()
 * - Eliminar Objetos
 *      - IDBObjectStore.delete()
 */

"use strict";

// Nota todos tienen transaction

// Primero le solicitamos al navegador abrir la DB
// Con open abrimos la DB, si no existe la creamos. El segúndo parametro es la version
const IDBRequest = indexedDB.open("ignaciobase", 1);

IDBRequest.addEventListener("upgradeneeded", () => {
    // Acá se agregarían las tablas
    console.log("Se creo correctamente");
    const db = IDBRequest.result; // Dejamos de usar la solicitud y ahora usamos la Base de Datos
    // autoIncrement es como la id única
    // keyPath tambien funciona como id, tomaria nombre (en este caso) para la asociacion
    db.createObjectStore("nombres", {
        autoIncrement : true
    })
    // Podriamos usar un addEventListener para ver si todo salio bien (en esto caso no lo haremos)

})

IDBRequest.addEventListener("success", () => {
    console.log("Todo salio correctamente");
})

// En caso de que haya un error
IDBRequest.addEventListener("error", () => {
    console.log("Ocurrio un error al abrir la Base de Datos");
})

const addObjeto = objeto => {
    const db = IDBRequest.result;
    // Se abre una operación para hacer algo (lo que sea), pero hay que indicarle en objetor (en este caso nombre) se va a hacer, luego, en que modo, escritura y lectura, o solo lectura
    const IDBtransaction = db.transaction("nombres", "readwrite");
    const objectStore = IDBtransaction.objectStore("nombres");
    // Ya con esto la operación esta abierta
    objectStore.add(objeto);
    IDBtransaction.addEventListener("complete", () => {
        console.log("Objeto agregado correctamente");
    })
}

const leerObjetos = ()=> {
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres", "readonly");
    const objectStore = IDBtransaction.objectStore("nombres");
    const cursor = objectStore.openCursor();
    // El else es porque cursor se ejecuta 2 veces, y en la 2da siempre lo hace con null
    cursor.addEventListener("success", () => {
        if(cursor.result) {
            console.log(cursor.result.value);
            cursor.result.continue();
        } else console.log("Todos los datos fueron leidos");
    })
}

const modificarObjeto = (key, objeto) => {
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres", "readwrite");
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.put(objeto, key);
    IDBtransaction.addEventListener("complete", () => {
        console.log("Objeto modificado correctamente");
    })
}

const eliminarObjeto = (key) => {
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres", "readwrite");
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.delete(key);
    IDBtransaction.addEventListener("complete", () => {
        console.log("Objeto eliminado correctamente");
    })
}

// Con esto se podrian hacer algunas optimizaciones
const getIDBData = (mode) => {
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres", mode);
    const objectStore = IDBtransaction.objectStore("nombres");
    return [objectStore, IDBtransaction];
}

console.log(IDBRequest);