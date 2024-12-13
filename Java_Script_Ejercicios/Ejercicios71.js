// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un 
// número primo o no.

let numero = parseInt(prompt("Introduce un número entero:"));

function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

if (esPrimo(numero)) {
  alert("El número es primo.");
} else {
  alert("El número no es primo.");
}
