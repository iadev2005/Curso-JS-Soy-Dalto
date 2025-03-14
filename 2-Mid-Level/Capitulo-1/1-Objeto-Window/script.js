/**
 * Introducción a Window
 * - Hereda las propiedades de EventTarget
 * - open() - Carga un recurso en el contexto de un nuevo navegador o uno que ya existe
 * - close() - Cierra la ventana actual, o la ventana en la que se llamo
 * - closed - Indica si la ventana referenciada esta cerrada o no
 * - name - Obtiene / establece el nombre del contexto de exploración de la ventana
 * - stop() - Detiene la carga de recursos en el contexto de navegación actual
 * - alert() - Muestra un cuadro de alerta con el contenido especificado y un botón Aceptar
 * - print() - Abre el cuadro de dialogo imprimir  para imprimir el documento actual
 * - prompt() - Abre un cuadro de diálogo con un mensaje que solicita al usuario un dato (String)
 * - confirm() - Abre un cuadro de diálogo con un mensaje y dos botones: Aceptar y Cancelar
 * 
 * - screen - Devuelve una referencia al objeto de pantalla asociado con la ventana
 * - screenLeft - Devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla
 * - screenTop - Devuelve la distancia vertical entre el borde superior delnavegador y el borde superior de la pantalla
 * - scrollX - Devuelve el número de píxeles en los que el documento se desplaza horizontalemente
 * - scrollY - Devuelve el número de píxeles en los que el documento se desplaza verticalmente
 * - scroll() - Desplaza la venta a un lugar particular en el documento (con options y con posiciones)
 * 
 * - minimize() - Minimiza la ventana
 * - resizeBy() - Cambia el tamaño de la ventana actual en una cantidad específica
 * - resizeTo() - Redimensiona dinámicanete la ventana
 * - moveBy() - Mueve la ventana en una ubicación relativa
 * - moveTo() - Mueve la ventana en una ubicación absoluta
 * 
 * - Objetos barbrop
 *      _locationbar
 *      _menubar
 *      _personalbar
 *      _scrollbars
 *      _statusbar
 *      _toolbar
 */ 
const youtubeURL = "https://youtube.com"
let ventana = window.open(youtubeURL);
ventana.close();
console.log(ventana.closed);

/* Stop detiene la carga de la página */

/* Ya no se usa más esto, se usa simplemente alert */
// window.alert("Hola papu");

/* print nos lleva a la ventana de impresión */

prompt(`Dame un dato papu`);
/* Si se acepta es true, si se rechaza false */
let respuesta = confirm("Estas seguro que deseas salir del sitio web");
console.log(respuesta);