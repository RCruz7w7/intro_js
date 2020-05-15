// Capturar los elementos
// Imagen de perfil
const imagen = document.querySelector("img.imagenperfil");

// Nombre de usuario
const nombre = document.querySelector(".nombre");

// Nombre @usuario
const nombreu = document.querySelector(".nombreuser");

// Seguidores
const seguidores = document.querySelector(".seguidores");

// Siguiendo
const siguiendo = document.querySelector(".siguiendo");

// Input
const input = document.querySelector(".input");

// boton
const boton = document.querySelector("button#boton");

// clase
const clase = document.querySelector(".div1")



// Funcion asincrona
async function obtenerDatosDeGit() {
    let respuesta = await fetch("https://api.github.com/users/RCruz7w7");

// Comprobacion
if (respuesta.ok) {
    let user = await respuesta.json();
}else {
    alert("La conexion no ha sido completada");
}
};

// Evento en el boton
boton.addEventListener("click", function() {
    obtenerDatosDeGit();
    clase.style.opacity = "1";
    clase.style.transitionDuration = "1.5s";

    // ACTUALIZAR DATOS SEGUN LO TRAIDO
    // Imagen
    imagen.src = user.avatar_url;

    // Nombre de usuario
    nombre.textContent = user.name;

    // Nombre @usuario
    nombreu.textContent = user.login;

    // Seguidores
    seguidores.textContent = "Seguidores: " + user.followers;

    // Siguiendo
    siguiendo.textContent = "Siguiendo: " + user.following
});

