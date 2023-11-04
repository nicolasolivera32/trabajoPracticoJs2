/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */

let numIngresado = 0;
let resultado = 0;
do {
  numIngresado = parseInt(prompt("Ingrese un valor: "));
  if (numIngresado < 0 || numIngresado > 0) {
    resultado = resultado + numIngresado;
  } else {
    alert("El valor ingresado no es un numero!!");
  }
} while (confirm("Desea seguir ingresando numeros?"));

document.write(`La suma total de los valores ingresados es: ${resultado}`);
