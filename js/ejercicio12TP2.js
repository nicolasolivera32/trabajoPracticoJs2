/*
Realiza un script que genere un número aleatorio entre 1 y 99
*/
let num1 = 1;
let num2 = 99;

function getRandomArbitrary(num1, num2) {
  return Math.round(Math.random() * (num2 - num1) + num1);
}
console.log(getRandomArbitrary(num1, num2));
