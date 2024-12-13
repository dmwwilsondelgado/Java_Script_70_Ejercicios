// Determinar si un número es positivo y menor que 100.


 function solicitamos() {
    let numero = parseFloat(prompt('Ingrese un número x:'));
  
    if (isNaN(numero)) {
      alert('Por favor ingrese un número válido.');
    } else {
      verificamos(numero);
    }
  }

function verificamos(numero) {
    if (numero > 0 && numero < 100) {
      alert('El número es positivo y menor que 100.');
    } else {
      alert('El número no cumple con las condiciones.');
    }
}
  solicitamos();
  