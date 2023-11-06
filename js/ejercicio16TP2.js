/*
Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

// let frase =prompt("ingrese una frase")

// const texto= frase.split()
// let textoReves= texto.reverse
// alert(texto)

let texto = prompt("Ingresa una cadena de texto:");

// Convierte la cadena de texto en un array de caracteres
let caracteres = texto.split("");

// Invierte el orden de los caracteres en el array
let caracteresAlReves = caracteres.reverse();

// Une los caracteres invertidos para formar la cadena al revés
let resultado = caracteresAlReves.join("");

// Muestra el resultado
alert(resultado);
