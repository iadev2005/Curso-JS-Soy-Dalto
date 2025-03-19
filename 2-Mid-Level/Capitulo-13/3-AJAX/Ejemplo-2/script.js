let peticion;

if (window.XMLHttpRequest) {
    peticion = new XMLHttpRequest();
} else {
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}

peticion.addEventListener("load", () => {
    let respuesta;
    if (peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
    else respuesta = "Lo siento no se ha encontrado el recurso";
    // console.log(respuesta);
    console.log(peticion.status);
    // Esto hay que reconvertirlo a JSON
    console.log(JSON.parse(respuesta));
    // El status fue 201, significa que todo ok
})

// Usaremos la pagina regres.in para trabajar con los métodos GET y POST
// peticion.open("GET", "https://reqres.in/api/users?page=2");
// La información que enviaremos 
peticion.open("POST", "https://reqres.in/api/users");

// Con esta línea si podremos ver el valor de los campos del JSON donde le señalamos el tipo de contenido
peticion.setRequestHeader("Content-type", "application/json; charset=UTF8")

// Enviamos el json serializado
peticion.send(JSON.stringify({
    "name": "morpheus",
    "job": "leader"
})); 