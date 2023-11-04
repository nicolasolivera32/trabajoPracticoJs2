/* Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:

Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido
*/

//------------------- Realizado con switch---------------------

const nota = parseInt(prompt("Ingrese una nota"));

switch (nota) {
  case 0:
  case 1:
  case 2:
    if (nota >= 0 && nota <= 2) {
      alert("Muy deficiente");
    }
    break;
  case 3:
  case 4:
    if (nota > 2 && nota <= 4) {
      alert("Insuficiente");
    }
    break;
  case 5:
  case 6:
    if (nota > 4 && nota <= 6) {
      alert("Suficiente");
    }
    break;
  case 7:
    if (nota === 7) {
      alert("Bien");
    }
    break;
  case 8:
  case 9:
    if (nota > 7 && nota <= 9) {
      alert("Notable");
    }
    break;
  case 10:
    if (nota === 10) {
      alert("Sobresaliente");
    }
    break;
  case nota:
    if (nota > 10) {
      alert("Número erroneo");
    }
    break;
  default:
    alert("Introduce un número válido");
}

// ----------Realizado con If---------------

// if (nota >= 0 && nota <= 2) {
//   alert("Muy deficiente");
// } else if (nota > 2 && nota <= 4) {
//   alert("Insuficiente");
// } else if (nota > 4 && nota <= 6) {
//   alert("Suficiente");
// } else if (nota === 7) {
//   alert("Bien");
// } else if (nota > 7 && nota <= 9) {
//   alert("Notable");
// } else if (nota === 10) {
//   alert("Sobresaliente");
// } else if (nota > 10) {
//   alert("Número erroneo");
// } else {
//   alert("Introduce un número válido");
// }


