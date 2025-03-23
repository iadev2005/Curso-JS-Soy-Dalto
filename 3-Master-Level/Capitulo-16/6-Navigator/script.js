/**
 * Objeto Navigator
 * - NavigatorID
 * - NavigatorLanguage
 * - NavigatorOnline
 * - NavigatorContentUtils
 * - NavigatorStorageUtils
 * - NavigatorCookies
 * - NavigatorConcurrentHardware
 * - NavigatorPlugins
 * - NavigatorUserMedia
 */

// Propiedades ------------ 
// Las tres primeras son obsoletas (no siempre funcionan)
console.log("AppCodeName: " + navigator.appCodeName); // Nombre del código de la aplicación del navegador
console.log("AppName: " + navigator.appName); // Nombre de la aplicación del navegador
console.log("AppVersion: " + navigator.appVersion); // Versión de la aplicación del navegador

console.log("Browser Language: " + navigator.language); // Idioma preferido del usuario
console.log("Languages: " + navigator.languages); // Lista de idiomas preferidos por el usuario
console.log("OnLine: " + navigator.onLine); // Estado de conexión a Internet
console.log("Cookie Enabled: " + navigator.cookieEnabled); // Indica si las cookies están habilitadas
console.log("Platform: " + navigator.platform); // Plataforma del sistema operativo
console.log("Product: " + navigator.product); // Nombre del producto del navegador
console.log("Product Sub: " + navigator.productSub); // Subversión del producto del navegador
console.log("UserAgent: " + navigator.userAgent); // Cadena de agente de usuario que identifica el navegador
console.log("Vendor: " + navigator.vendor); // Proveedor del navegador
console.log("Vendor Sub: " + navigator.vendorSub); // Subversión del proveedor del navegador
// Propiedades relacionadas con los tipos MIME ------------ 
console.log("MimeTypes: ", navigator.mimeTypes); // Lista de tipos MIME soportados por el navegador
console.log("Permissions: " + navigator.permissions); // Muestra todo lo referente a los persmisos del navegador
console.log("ServiceWorker: " + navigator.serviceWorker);

/**
 * Metodos Estandares del Navegador
 * - NavigatorUserMedia.getUserMedia() - Solicita permiso y devuelve el stream de multimedia asociadoa la cámara o microfono del dispostivo
 * - Navigator.registerContentHandler() - Permite a los webs sites registrarse como posibles controladores de un tipo MIME determinado
 * - Navigator.registerProtocolHandler() - Permite a los sitios webs registrarse como posibles controladores de un protocolo determinado
 * - Navigator.requestMediaKeySystemAccess() - Devuelve un objeto Promise para un objeto MediaKeySystemAccess
 * - NavigatorPlugins.javaEnabled() - Devuelve un valor Boolean que indica si el navegador tiene o no tiene habilitado Java
 * - Navigator.sendBeacon() - Usado para transferir, de forma asincrona, conjuntos pequeños de datos HTTP del agente usuario al servidor
 * - Navigator.vibrate() - Causa vibracion en el dispositivo que la soporta. No hace nada si el soporte para vibracion no esta disponible
 *      
 */

// Metodos ------------
// navigator.getUsersMedia()
// navigator.registerContentHandler()
// navigator.registerProtocolHandler()
// navigator.requestMediaKeySystemAccess()
// navigator.sendBeacon()
// navigator.javaEnabled()
// navigator.vibrate()