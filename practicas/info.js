// Array de los dias de la semana con la informacion que el usuario digite
// let diasSemana = [];
// alert("Escribe los dias de la semana");

// // Preguntando los dias se la semana

// // Poniendo los dias en array (diasSemana)
// diasSemana.push(prompt("Dia 1"));
// diasSemana.push(prompt("Dia 2"));
// diasSemana.push(prompt("Dia 3"));
// diasSemana.push(prompt("Dia 4"));
// diasSemana.push(prompt("Dia 5"));
// diasSemana.push(prompt("Dia 6"));
// diasSemana.push(prompt("Dia 7"));

// console.table(diasSemana);

// Array de los miembros de la familia 
// let familiares = [];

// Preguntando al usuario los nombres de los familiares
// alert("Pon el nombre de 3 de tus familiares");

// // Poniendo los nombres en array (familiares)
// familiares.push(prompt("Nombre 1"));
// familiares.push(prompt("Nombre 2"));
// familiares.push(prompt("Nombre 3"));

// Objeto para la informacion del usuario
// alert("Escribe los siguientes datos personales");
// let datosPersonales = {
//    nombre: prompt("Nombre"),
//     fechaNacimiento: prompt("Fecha de nacimiento"),
//     lugarNacimiento: prompt("Lugar de nacimiento"),
//     edad: parseInt(prompt("Edad")),
//     poseeLicencia: confirm("Posee licencia para conducir?"),
//     universidad: confirm("Esta en la universidad?"),
//     paisesVisitar: [],
//     comidasFavoritas: [],
// };

// Agregar datos a un array dentro de un objeto (paisesVisitar)
// datosPersonales.paisesVisitar.push(prompt("Pais favorito 1"));
// datosPersonales.paisesVisitar.push(prompt("Pais favorito 2"));
// datosPersonales.paisesVisitar.push(prompt("Pais favorito 3"));
// datosPersonales.paisesVisitar.push(prompt("Pais favorito 4"));
// datosPersonales.paisesVisitar.push(prompt("Pais favorito 5"));

// Agregar datos a un array dentro de un objeto (comidasFavoritas)
// datosPersonales.comidasFavoritas.push(prompt("Comida favorita 1"));
// datosPersonales.comidasFavoritas.push(prompt("Comida favorita 2"));
// datosPersonales.comidasFavoritas.push(prompt("Comida favorita 3"));

// Objeto con datos del artista favorito del usuario
alert("Escribe algunos datos de tu artista favorito");

// Creacion de objeto y prompt's
let datosArtista = {
    nombre: prompt("Nombre de tu artista favorito"),
    edad: parseInt(prompt("Edad de tu artista")),
    colorPiel: prompt("Color de piel"),
    canciones: [],
}

// Escribe algunas canciones de tu artista favorito
alert("Escribe algunas canciones de tu artista favorito");

datosArtista.canciones.push(prompt("Cancion 1"));
datosArtista.canciones.push(prompt("Cancion 2"));
datosArtista.canciones.push(prompt("Cancion 3"));
datosArtista.canciones.push(prompt("Cancion 4"));

// Imprimir datos por consola 
// console.log(datosPersonales.nombre);
// console.log(datosPersonales.fechaNacimiento);
// console.log(datosPersonales.paisesVisitar[0]);
// datos artista
console.log("Tu artista se llama " + datosArtista.nombre);
console.log("Tu artista tiene " + datosArtista.edad + " años");
console.log("El color de piel de tu artista es " + datosArtista.colorPiel);
console.log("Una de las canciones de el artista es " + datosArtista.canciones[2]);




