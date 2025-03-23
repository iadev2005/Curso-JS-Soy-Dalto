/**
 * Visibility Change
 * - event visibilitychange
 * - Usos
 */

addEventListener("visibilitychange", () => {
    console.log("Se cambio de pestaña")
    if (document.visibilityState == "visible") {
        console.log("Abandonaste")
    } else {
        console.log("Volviste")
    }
    console.log(document.visibilityState);
})