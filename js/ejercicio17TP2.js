/*
Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:

Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1

*/

let posición = 0;
let letra = "";
let cadena = prompt("Ingrese la cadena de texto que desee: ");
cadena = cadena.toLocaleLowerCase();

for (let i = 0; i < cadena.length; i++) {
  if (
    cadena.charAt(i) == "a" ||
    cadena.charAt(i) == "e" ||
    cadena.charAt(i) == "i" ||
    cadena.charAt(i) == "o" ||
    cadena.charAt(i) == "u"
  ) {
    letra = letra + cadena.charAt(i);
    posición = cadena.indexOf(cadena.charAt(i));
    break;
  }
}
alert(`La vocal ${letra} se encuentra en la posición ${posición}`);
