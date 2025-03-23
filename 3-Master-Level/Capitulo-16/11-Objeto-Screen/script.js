let anchoTotal = screen.width;
let alturaTotal = screen.height;

let anchoDisponible = screen.availWidth;
let alturaDisponible = screen.availHeight;

let resolucion = screen.pixelDepth;
let profundidad = screen.colorDepth;

console.log(`Ancho total: ${anchoTotal}`);
console.log(`Altura total: ${alturaTotal}`);

// El disponible varía según la disposición de la pestaña (hasta la barra de tareas)
console.log(`Ancho disponible: ${anchoDisponible}`);
console.log(`Altura disponible: ${alturaDisponible}`);
console.log(`Resolución: ${resolucion}`);
console.log(`Profundidad de color: ${profundidad}`);

// La difrencia con el innerHeight o innerWidth es que estos dos solo consideran el viewport