/**
 * Notifications
 * - Notification.requestPermission()
 * - Notification.permission
 * - Notification(msg, options)
 */

"use strict";

if (!('Notification' in window)) {
    console.log("Las notificaciones no estan disponibles en su  navegador");
}

Notification.requestPermission(() => {
    if (Notification.permission == "granted") {
        console.log("Permiso Concedido");
        new Notification("Primera Notificacion");
    }
});