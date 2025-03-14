/**
 * - parentElement
 * - parentNode
 */

/* En general es mejor trabajar con Element ya que Node a veces no nos retorna elementos y casi siempre buscamos trabajar con elementos */

const contenedor = document.querySelector(`.contenedor`);
const selector = document.querySelector(`.parrafo`);
document.writeln(`<p>El elemento padre de ${selector.className} es ${selector.parentElement}</p>`);
/* En consola lo señala mejor */
console.log(selector.parentElement);
/* En raros casos retornan diferentes, pero igual es recomendable Element */
console.log(selector.parentNode);