/**
 * Excepciones y Tipos de Excepciones
 * - Definición y usos
 * - Excepciones ECMAScript
 * - DOMException y DOMError
 * - Try... Catch
 *      - Sintaxis
 *      - Objeto error
 *      - Catch Incondicional
 *      - Catch Condicional
 *      - Sentencia Throw
 *      - Finally
 */

try {
    aksaks
} catch (error) { // Catch incondicional
    console.log("Tipo de dato del error: " + typeof error)
    console.log("Tipo de error: " + error);
    console.log("Lo siento, ocurrio un error de referencia")
}

try {
    akaka
} catch (error) { // Catch condicional
    if (3 > 5) {
        console.log("Ha sucedido un error");
    } else {
        console.log("Mondongo");
    }
} finally { // El finally siempre se ejecuta
    console.log("Me chupa un huevo, lo muestro igual")
}

/* Esta funcion retornara 3 */
const pruebaTry = () => {
    try {
        return 1;
    }
    catch(e) {
        return 2;
    }
    finally {
        return 3;
    }
}

alert(pruebaTry());

/* La sentencia throw es para tirar un error (Crea una excepcion), también puede lanzar objetos*/

try {
    // throw "mondongo";
    throw {
        error: "Nombre del Error",
        info: "Informacion del error"
    }
}
catch (e) {
    console.log(e);
    // Podemos acceder al objeto desde aca
    console.log(e.error);
    console.log(e.info);
}
finally {
}

// Incluso podemos lanzar arrays

try {
    throw ["Pedro", "Jorge"];
} 
catch(e) {
    console.log(e[0]);
}
finally {
    
}