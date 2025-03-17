/**
 * Ejercicio A
 * - Interfaz para introducir nota
 * - Validar que no haya errores
 * - Promediar notas con trabajos
 * - Si el pormedio es mayor a 7/10 aprobar
 */

const sendButton = document.getElementById(`send-note`);
const note = document.getElementById(`note`);
const resultModal = document.querySelector(".result");
const messageModal = document.querySelector(".message");
const backgroundModal = document.querySelector(".modal-background");

sendButton.addEventListener("click", ()=> {
    let result, message
    try {
        let prevResult = parseInt(note.value);
        if (isNaN(prevResult)) {
            throw "Is not a integer";
        }
        message = defineMessage(prevResult);
        result = checkApproval(7, 7, prevResult);
    } catch (error) {
        result = "Is not a integer";
        message = "The information entered is not an integer";
    }
    openModal(result, message);
})

const defineMessage = (prevResult) => {
    let result;
    /* Esto es mejor que un switch en todo caso */
    if (prevResult == 1) result = "Poor Performance";
    else if (prevResult == 2) result = "Needs Improvement";
    else if (prevResult == 3) result = "Fair Performance";
    else if (prevResult == 4) result = "Satisfactory";
    else if (prevResult == 5) result = "Good Performance";
    else if (prevResult == 6) result = "Very Good";
    else if (prevResult == 7) result = "Excellent";
    else if (prevResult == 8) result = "Outstanding";
    else if (prevResult == 9) result = "Exceptional";
    else if (prevResult == 10) result = "Perfect Score";
    else result = null;

    return result;
}

const openModal = (result, message)=> {
    // console.log(result);
    // console.log(message);
    resultModal.innerHTML = result;
    messageModal.innerHTML = "Tu prueba: " + message;
    backgroundModal.style.display = "flex";
    backgroundModal.style.animation = "show 1s forwards";
}

// Deberia hacer un sistema que funcione con n notas (Ver un video despuée)
const checkApproval = (n1, n2, prevResult) => {
    average = (n1 + n2 + prevResult) / 3;
    if (average >= 7) {
        let result = `<span class=approved> APPROVED <span>`;
        return result;
    }
    else {
        let result = `<span class=disapproved> DISAPPROVED <span>`;
        return result;
    }
}