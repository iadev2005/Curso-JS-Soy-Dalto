"strict mode";
// El parametro si o si tiene que estar de ultimo
const suma = (...num) => {
    let resultado = 0;
    for (let i=0; i < num.length; i++) {
        resultado += num[i];
    }
    console.log(resultado)
}
// Ejm:
// const suma = (frase, ...num) => {...}

suma(7,14,5,4,3);