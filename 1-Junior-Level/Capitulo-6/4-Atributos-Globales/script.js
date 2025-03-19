/**
 * Atributos Globales
 * - contentEditable - Indica si el elemento puede ser modificable por el usuario (bool)
 * - dir - Indica la direccionalidad del texto
 * - hidden - Indica si el elemento aún no es, o ya no es, relevante
 * - style - contiene declaraciones de estilo CSS para ser aplicadas al elemento
 * - tabindex - indica si el elemento puede obtener un focus de input
 * - title - contiene un texto con información relacionada al elemento al que pertenece
 */

const selector = document.querySelector(`.titulo`);
/* Para poder editar el h1 desde la web */
selector.setAttribute(`contentEditable`, `true`);

/* Esto ya lo vi en el curso de CSS + HTML, dependiendo de la zona hay personas que leen de izquierda a derecha, o derecha a izquierda, eso se puede editar también */

/* Cambiándolo de derecha  izquierda */
selector.setAttribute(`dir`,`rtl`);

/* Podemos ocultar el elemento (hay otras formas...) */
/* Si esta definida no importa si es true o false, igual se muestra */
// selector.setAttribute(`hidden`, `true`);

/* Permite hacer un focus con tab */
selector.setAttribute(`tabindex`, `0`);

/* Recordando que lo que hace es title es que cuando se situa el ratón sobre un elemento se muestre el nombre del elemento */
selector.setAttribute(`title`, `Messi`);