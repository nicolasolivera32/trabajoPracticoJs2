/*
Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm()
*/


do {
    const primerTexto = prompt("Escriba un texto");
    const segundoTexto = prompt("Escriba otro texto");
  
    let textoUnido = primerTexto + "-" + segundoTexto + "-";
    document.write(textoUnido);
  } while (confirm("Desea escribir otro texto?"));
  
  