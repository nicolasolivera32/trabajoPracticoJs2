/*
Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 

Input:  40773821 
Output: ‘L’
*/

do {
  let numeroDNI = parseInt(prompt("Ingrese un DNI:"));
  if (numeroDNI >= 0 && numeroDNI < 99999999) {
    if (numeroDNI % 23 === 0) {
      alert("la letra es: T");
    } else if (numeroDNI % 23 === 1) {
      alert("la letra es: R");
    } else if (numeroDNI % 23 === 2) {
      alert("la letra es: W");
    } else if (numeroDNI & (23 === 3)) {
      alert("la letra es: A");
    } else if (numeroDNI % 23 === 4) {
      alert("la letra es: G");
    } else if (numeroDNI % 23 === 5) {
      alert("la letra es: M");
    } else if (numeroDNI % 23 === 6) {
      alert("la letra es: Y");
    } else if (numeroDNI % 23 === 7) {
      alert("la letra es: F");
    } else if (numeroDNI % 23 === 8) {
      alert("la letra es: P");
    } else if (numeroDNI % 23 === 9) {
      alert("la letra es: D");
    } else if (numeroDNI % 23 === 10) {
      alert("la letra es: X");
    } else if (numeroDNI % 23 === 11) {
      alert("la letra es: B");
    } else if (numeroDNI % 23 === 12) {
      alert("la letra es: N");
    } else if (numeroDNI % 23 === 13) {
      alert("la letra es: J");
    } else if (numeroDNI % 23 === 14) {
      alert("la letra es: Z");
    } else if (numeroDNI % 23 === 15) {
      alert("la letra es: S");
    } else if (numeroDNI % 23 === 16) {
      alert("la letra es: Q");
    } else if (numeroDNI % 23 === 17) {
      alert("la letra es: V");
    } else if (numeroDNI % 23 === 18) {
      alert("la letra es: H");
    } else if (numeroDNI % 23 === 19) {
      alert("la letra es: L");
    } else if (numeroDNI % 23 === 20) {
      alert("la letra es: C");
    } else if (numeroDNI % 23 === 21) {
      alert("la letra es: K");
    } else if (numeroDNI % 23 === 22) {
      alert("la letra es: E");
    }
  } else {
    alert("No es un número válido");
  }
} while (confirm("¿Desea ingresar otro DNI?"));
