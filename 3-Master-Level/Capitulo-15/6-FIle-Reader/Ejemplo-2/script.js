const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover", (e) => {
    e.preventDefault();
    changeStyle(e.target, "#444");
});

zona.addEventListener("dragleave", (e) => {
    e.preventDefault();
    changeStyle(e.target, "#888");
});

zona.addEventListener("drop", (e) => {
    e.preventDefault();
    changeStyle(e.target, "#888");
    cargarArchivo(e.dataTransfer.files[0]);  // Solo carga el primer archivo
    zona.style.border = "4px solid #888";
});

const changeStyle = (obj, color) => {
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
};

// Como los archivos estan cargando muy rápido no se muestra una chota
const cargarArchivo = (ar) => {
    const reader = new FileReader();

    reader.readAsArrayBuffer(ar);
    
    reader.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
            let carga = Math.round((e.loaded / e.total) * 100);
            zona.textContent = `${carga}%`;
            document.querySelector(`.barra-carga`).style.width = `${carga}%`;
        }
    });

    reader.addEventListener("loadend", (e) => {
        changeStyle(zona, "#4f9");
        document.querySelector(`.barra-carga`).style.background = "#4f9";
    });

    reader.addEventListener("load", (e) => {
        let videoBlob = new Blob([new Uint8Array(e.currentTarget.result)], { type: 'video/mp4' });
        let url = URL.createObjectURL(videoBlob);

        let video = document.createElement("video");
        video.setAttribute("src", url);
        video.setAttribute("controls", "");
        video.style.width = "100%";

        document.querySelector(".resultado").innerHTML = ''; 
        document.querySelector(".resultado").appendChild(video);
        // video.play();  
    });
};