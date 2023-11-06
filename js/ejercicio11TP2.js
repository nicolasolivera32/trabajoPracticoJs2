/*
Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

let edad = []
let nombre=[]

for(let i=0; i<3; i++){
    edad.push(parseInt(prompt("Ingrese una edad")))
    nombre.push(prompt("Ingrese un nombre"))
}
let posición = edad.indexOf(Math.max(...edad));
alert(`${nombre[posición]} es el mayor`)

