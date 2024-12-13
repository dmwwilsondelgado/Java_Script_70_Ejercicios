// Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él 
//     segundo, en caso contrario indicar con un mensaje que la operación no es posible 
//     realizarla

function realizarResta(numero1, numero2) {
    if (numero1 > numero2) {
      let resultado = numero1 - numero2;
      alert('El resultado de la resta es: ' + resultado);
    } else {
      alert('La operación no es posible, el primer número debe ser mayor que el segundo.');
    }
  }
  
  function solicitarNumeros() {
    let numero1 = parseFloat(prompt('Ingrese el primer número:'));
    let numero2 = parseFloat(prompt('Ingrese el segundo número:'));
  
    if (isNaN(numero1) || isNaN(numero2)) {
      alert('Por favor ingrese números válidos.');
    } else {
      realizarResta(numero1, numero2);
    }
  }
  
  solicitarNumeros();
  