const canvas = document.getElementById("canvas");
const rect = canvas.getBoundingClientRect(); 
const ctx = canvas.getContext("2d");

let painting = false, color, lineWidth, difx, dify;

canvas.addEventListener("mousedown", e => {
    painting = true;
    difx = e.clientX - rect.left; 
    dify = e.clientY - rect.top;   
    color = document.querySelector('input[type="color"]').value; 
    lineWidth = document.querySelector('input[type="range"]').value; 
});

canvas.addEventListener("mousemove", e => {
    if (painting) {
        dibujar(difx, dify, e.clientX - rect.left, e.clientY - rect.top);
        difx = e.clientX - rect.left; 
        dify = e.clientY - rect.top; 
    }    
});

canvas.addEventListener("mouseup", () => {
    painting = false; 
    ctx.beginPath();
});

const dibujar = (x1, y1, x2, y2) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
};