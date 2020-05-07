// Declarar variable para capturar los ids
let div = document.querySelector(".div");
let botonCambiar = document.querySelector("#boton");
let h1 = document.querySelector(".h1");

// Aplicarlos los efectos deseados en la tarea con un evento de click

botonCambiar.addEventListener("click", function (){
    // Hacer que el div desaparezca
    div.style.display = "none";

    // Hacer que el h1 cambie sus letras, color y estilo
    h1.style.fontSize = "3em";
    h1.style.fontFamily = "calibri";
    h1.style.color = "red";
    h1.style.fontStyle = "italic";
    h1.innerText = "Haz hecho doble click";
});


