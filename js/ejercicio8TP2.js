/*
Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numero = parseInt(prompt("Ingrese un número no mayor a 50"));

if (numero >= 1 && numero <= 50) {
  for (let i = 1; i <= numero; i++) {
    document.write("<br>");
    for (let c = 1; c <= i; c++) document.write(c);
  }
}else{
    alert("El número ingresado no está en el rango permitido")
}
