// desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el 
// menor o si son iguales.

function compararValores(a, b, c) {
    if (a > b && a > c) {
      alert('El mayor es ' + a);
    } else if (b > a && b > c) {
      alert('El mayor es ' + b);
    } else if (c > a && c > b) {
      alert('El mayor es ' + c);
    } else if (a === b && b === c) {
      alert('Todos los números son iguales.');
    } else if (a === b) {
      alert('El mayor es ' + c + ' y el menor es ' + a);
    } else if (b === c) {
      alert('El mayor es ' + a + ' y el menor es ' + b);
    } else if (a === c) {
      alert('El mayor es ' + b + ' y el menor es ' + a);
    }
  }
  
  function solicitarValores() {
    let a = parseFloat(prompt('Ingrese el primer valor:'));
    let b = parseFloat(prompt('Ingrese el segundo valor:'));
    let c = parseFloat(prompt('Ingrese el tercer valor:'));
  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      alert('Por favor ingrese valores válidos.');
    } else {
      compararValores(a, b, c);
    }
  }
  
  solicitarValores();
  