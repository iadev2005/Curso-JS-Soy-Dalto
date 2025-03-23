"use strict";

let cache = {};

const memorizer = func => {
    return e => {
        const index = e.toString();
        if (cache[index] === undefined) {
            cache[index] = func(e);
        }
        return cache[index];
    }
}

const hacerAlgo = num => {
    const a = 20;
    const b = 12;
    let c = 0;
    for (let i = num - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            c+= a*b;
        }
    }
    return c;
}

// Función sin memorizer
console.log("SIN MEMORIZER");
for (let i = 0; i < 4; i++) {
    const date = new Date();
    hacerAlgo(10000);
    console.log(`La operación tardó ${(new Date() - date) / 1000}s`);
}

// Función con memorizer
const m = memorizer(hacerAlgo);

console.log("\nCON MEMORIZER");
for (let i = 0; i < 4; i++) {
    const date = new Date();
    m(10000); // Cambié hacerAlgo a m
    console.log(`La operación tardó ${(new Date() - date) / 1000}s`);
}