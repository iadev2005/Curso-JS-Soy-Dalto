/* 
Problema A)
-Ingresar el monto y mostrar el más alto
-Si hay 2 o más, mostrar ambos
-Indicar el vuelto
*/

let nombreCofla = `Cofla`;
let nombreRoberto= `Roberto`;
let nombrePedro = `Pedro`;

let dineroCofla = prompt(`Cuanto dinero tienes ${nombreCofla}?`);
let dineroRoberto = prompt(`Cuanto dinero tienes ${nombreRoberto}?`);
let dineroPedro = prompt(`Cuanto dinero tienes ${nombrePedro}?`);

// dineroCofla = parseFloat(dineroCofla)
// dineroRoberto = parseFloat(dineroRoberto)
// dineroPedro = parseFloat(dineroPedro)

dineroCofla = parseInt(dineroCofla);
dineroCofla = parseInt(dineroCofla);
dineroCofla = parseInt(dineroCofla);

/* Precios de los productos */
/* Si compra Cofla */
if(dineroCofla >= 0.6 && dineroCofla < 1) {
    alert(`Che ${nombreCofla} comprate el helado de agua. Y tu vuelto seria de ${dineroCofla-0.6}`)
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert(`Che ${nombreCofla} comprate el helado de crema. Y tu vuelto seria de ${dineroCofla-1}`)
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert(`Che ${nombreCofla} comprate el helado marca heladovich. Y tu vuelto seria de ${dineroCofla-1.6}`)
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert(`Che ${nombreCofla} comprate el helado marca helardo. Y tu vuelto seria de ${dineroCofla-1.7}`)
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert(`Che ${nombreCofla} comprate el helado con confites. Y tu vuelto seria de ${dineroCofla-1.8}`)
}
else if (dineroCofla >= 2.9) {
    alert(`Che ${nombreCofla} comprate el helado de 1/4 de KG (Alto gordo morfon que sos ehhh). Y tu vuelto seria de ${dineroCofla-2.9}`)
}
else {
    alert(`Anda a agarrar la pala ${nombreCofla}`)
}
/* Si compra Roberto */
if(dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert(`Che ${nombreRoberto} comprate el helado de agua. Y tu vuelto seria de ${dineroRoberto-0.6}`)
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert(`Che ${nombreRoberto} comprate el helado de crema. Y tu vuelto seria de ${dineroRoberto-1}`)
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert(`Che ${nombreRoberto} comprate el helado marca heladovich. Y tu vuelto seria de ${dineroRoberto-1.6}`)
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert(`Che ${nombreRoberto} comprate el helado marca helardo. Y tu vuelto seria de ${dineroRoberto-1.7}`)
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert(`Che ${nombreRoberto} comprate el helado con confites. Y tu vuelto seria de ${dineroRoberto-1.8}`)
}
else if (dineroRoberto >= 2.9) {
    alert(`Che ${nombreRoberto} comprate el helado de 1/4 de KG (Alto gordo morfon que sos ehhh). Y tu vuelto seria de ${dineroRoberto-2.9}`)
}
else {
    alert(`Anda a agarrar la pala ${nombreRoberto}`)
}

/* Si compra Pedro */
if(dineroPedro >= 0.6 && dineroPedro < 1) {
    alert(`Che ${nombrePedro} comprate el helado de agua. Y tu vuelto seria de ${dineroPedro-0.6}`)
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert(`Che ${nombrePedro} comprate el helado de crema. Y tu vuelto seria de ${dineroPedro-1}`)
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert(`Che ${nombrePedro} comprate el helado marca heladovich. Y tu vuelto seria de ${dineroPedro-1.6}`)
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert(`Che ${nombrePedro} comprate el helado marca helardo. Y tu vuelto seria de ${dineroPedro-1.7}`)
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert(`Che ${nombrePedro} comprate el helado con confites. Y tu vuelto seria de ${dineroPedro-1.8}`)
}
else if (dineroPedro >= 2.9) {
    alert(`Che ${nombrePedro} comprate el helado de 1/4 de KG (Alto gordo morfon que sos ehhh). Y tu vuelto seria de ${dineroPedro-2.9}`)
}
else {
    alert(`Anda a agarrar la pala ${nombrePedro}`)
}

if ((dineroCofla>0) && (dineroPedro>0) && (dineroRoberto>0)) {
    if ((dineroCofla===dineroPedro) && (dineroPedro==dineroRoberto)) {
        alert(`Todos tienen la misma cantidad de dinero`)
    }
    else if ((dineroCofla >= dineroRoberto) && (dineroCofla >= dineroPedro)) {
        alert(`El monto de ${nombreCofla} es el más alto con ${dineroCofla}$`)
        if((dineroCofla == dineroRoberto)) {
            alert(`Junto con el monto de ${nombreRoberto} es el más alto con ${dineroRoberto}$`)
        }
        else if((dineroCofla == dineroPedro)) {
            alert(`Junto con el monto de ${nombrePedro} es el más alto con ${dineroPedro}$`)
        }
    }
    else if ((dineroRoberto >= dineroCofla) && (dineroRoberto >= dineroPedro)) {
        alert(`El monto de ${nombreRoberto} es el más alto con ${dineroRoberto}$`)
        if((dineroRoberto == dineroPedro)) {
            alert(`Junto con el monto de ${nombrePedro} es el más alto con ${dineroPedro}$`)
        }
    }
    else {
        alert(`El monto de ${nombrePedro} es el más alto con ${dineroPedro}$`)
    }
}
else {
    if (dineroCofla<0) {
        alert(`El boludo de ${nombreCofla} no tiene guita`)
    }
    else if (dineroRoberto<0) {
        alert(`El boludo de ${nombreRoberto} no tiene guita`)
    }
    else {
        alert(`El boludo de ${nombrePedro} no tiene guita`)
    }
}


/* Estos problemas para más adelante: */

/* 
Problema B)
-Si le alcanza uno, lo compra
-Si le alcanza dos, compra dos
-Si le alcanza tres y sobra, regala el vuelto
-Debe mostrar que compro y el vuelto
*/

/* 
Problema C)
-Si miente, le da una descarga
-Si no miente, no hacer nada
-Si el aparato no se decide, aclarar que la pregunta debe ser más clara
*/