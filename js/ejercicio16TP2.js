/*
Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

let texto = prompt("Ingresa una cadena de texto:");
let caracteres = texto.split("");
let caracteresAlReves = caracteres.reverse();
let resultado = caracteresAlReves.join("");

alert(resultado);
