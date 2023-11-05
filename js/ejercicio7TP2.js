/*
Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let numero = parseInt(prompt("ingrese un número no mayor a 50"));

if (numero >= 1 && numero <= 50) {
  for (let i = numero; i >= 1; i--) {
    document.write("<br>");
    for (let c = 0; c < i; c++) {
      document.write(i);
    }
  }
}
