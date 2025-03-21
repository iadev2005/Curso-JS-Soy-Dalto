"use strict";

const IDBRequest = indexedDB.open("ignaciobase", 1);

IDBRequest.addEventListener("upgradeneeded", () => {
    console.log("Se creó correctamente");
    const db = IDBRequest.result;
    db.createObjectStore("nombres", {
        autoIncrement: true
    });
});

IDBRequest.addEventListener("success", () => {
    // console.log("Todo salió correctamente");
    leerObjetos();
});

IDBRequest.addEventListener("error", () => {
    console.log("Ocurrió un error al abrir la Base de Datos");
});

document.getElementById("add").addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;

    if (nombre.length > 0) {
        console.log("Probando");
        const hayElementosSinGuardar = document.querySelector(".posible") !== null;
        if (hayElementosSinGuardar) {
            console.log("Probando 2");
            if (confirm("Hay elementos sin guardar: ¿Quieres continuar?")) {
                addObjeto({ nombre: nombre });
                leerObjetos();
            } else {
                console.log("El usuario decidió no continuar.");
            }
        } else {
            addObjeto({ nombre: nombre });
            leerObjetos();
        }
        document.getElementById("nombre").value = "";
    } else {
        console.log("El campo de nombre está vacío.");
    }
});

const getIDBData = (mode) => {
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres", mode);
    const objectStore = IDBtransaction.objectStore("nombres");
    return [objectStore, IDBtransaction];
};

const addObjeto = objeto => {
    const [objectStore, IDBtransaction] = getIDBData("readwrite");
    objectStore.add(objeto);
    IDBtransaction.addEventListener("complete", () => {
        console.log("Objeto agregado correctamente");
    });
};

const leerObjetos = () => {
    const [objectStore, IDBtransaction] = getIDBData("readonly");
    const cursor = objectStore.openCursor();
    const fragment = document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML = "";
    cursor.addEventListener("success", () => {
        if (cursor.result) {
            // console.log(cursor.result.value);
            let elemento = nombresHTML(cursor.result.key, cursor.result.value);
            fragment.appendChild(elemento);
            cursor.result.continue();
        } else {
            // console.log("Todos los datos fueron leídos");
            document.querySelector(".nombres").appendChild(fragment);
        }
    });
};

const modificarObjeto = (key, objeto) => {
    const [objectStore, IDBtransaction] = getIDBData("readwrite");
    objectStore.put(objeto, key);
    IDBtransaction.addEventListener("complete", () => {
        console.log("Objeto modificado correctamente");
    });
};

const eliminarObjeto = (key) => {
    const [objectStore, IDBtransaction] = getIDBData("readwrite");
    objectStore.delete(key);
    IDBtransaction.addEventListener("complete", () => {
        console.log("Objeto eliminado correctamente");
    });
};

const nombresHTML = (id, name) => {
    const container = document.createElement("div");
    const h2 = document.createElement("h2");
    const options = document.createElement("div");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");
    
    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";
    
    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable", "true");
    h2.setAttribute("spellcheck", "false");

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup", () => {
        saveButton.classList.replace("imposible", "posible");
    })

    saveButton.addEventListener("click", () => {
        if (saveButton.className == "posible") {
            modificarObjeto(id, {nombre : h2.textContent});
            saveButton.classList.replace("posible", "imposible")
        }
    })

    deleteButton.addEventListener("click", () => {
        eliminarObjeto(id);
        document.querySelector(".nombres").removeChild(container);
    })

    return container;
}



console.log(IDBRequest);