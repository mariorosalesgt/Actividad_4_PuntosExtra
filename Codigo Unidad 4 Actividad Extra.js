// Variables útiles 
var precio_base = 2000;

// Valores de los recargos
var edad_18 = 0.1, edad_25 = 0.2, edad_50 = 0.3;
var casado_18 = 0.1, casado_25 = 0.2, casado_50 = 0.3;
var hijos_recargo = 0.2;
var propiedades_recargo = 0.35;

while (true) {
  var recargo_total = 0;
  var nombre = prompt("Ingrese su nombre, por favor (o escriba 'Salir' para terminar)");
  if (nombre.toLowerCase() === "salir") break;

  var edad_numero = parseInt(prompt("¿Cuántos años tiene? Ingrese solamente números "));
  if (edad_numero < 18) {
    alert("Lo sentimos, debes tener al menos 18 años para cotizar el seguro.");
    continue;
  }

  var casado = prompt("¿Está casado actualmente? (Sí/No)").toUpperCase();
  var edad_conyuge_numero = 0;
  if (casado === "SI") {
    edad_conyuge_numero = parseInt(prompt("¿Qué edad tiene su esposo/a?"));
  }

  var hijos = prompt("¿Tiene hijos o hijas? (Sí/No)").toUpperCase();
  var hijos_numero = (hijos === "SI") ? parseInt(prompt("¿Cuántos hijos tiene?")) : 0;

  var propiedades = prompt("¿Tiene propiedades? (Sí/No)").toUpperCase();
  var propiedades_numero = (propiedades === "SI") ? parseInt(prompt("¿Cuántas propiedades tiene?")) : 0;

  var salario = parseFloat(prompt("Ingrese su salario mensual"));
  var salario_recargo = salario * 0.05;

  function calcularRecargo(edad, r1, r2, r3) {
    if (edad >= 18 && edad < 25) return precio_base * r1;
    if (edad >= 25 && edad < 50) return precio_base * r2;
    if (edad >= 50) return precio_base * r3;
    return 0;
  }

  recargo_total += calcularRecargo(edad_numero, edad_18, edad_25, edad_50);
  if (casado === "SI") recargo_total += calcularRecargo(edad_conyuge_numero, casado_18, casado_25, casado_50);
  recargo_total += hijos_numero * (hijos_recargo * precio_base);
  recargo_total += propiedades_numero * (propiedades_recargo * precio_base);
  recargo_total += salario_recargo;

  var precio_final = precio_base + recargo_total;
  alert("Para el asegurado " + nombre);
  alert("El recargo total será de: Q." + recargo_total);
  alert("El precio final será de: Q." + precio_final);
}
