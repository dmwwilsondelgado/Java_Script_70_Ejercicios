// Calcule el mayor de tres números, permitiendo leer 3 valores diferentes
function calcularMayor(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      alert('El mayor de los tres números es: ' + num1);
    } else if (num2 > num1 && num2 > num3) {
      alert('El mayor de los tres números es: ' + num2);
    } else if (num3 > num1 && num3 > num2) {
      alert('El mayor de los tres números es: ' + num3);
    } else {
      alert('Hay números iguales entre los tres.');
    }
  }
  
  function solicitarNumeros() {
    let num1 = parseFloat(prompt('Ingrese el primer número:'));
    let num2 = parseFloat(prompt('Ingrese el segundo número:'));
    let num3 = parseFloat(prompt('Ingrese el tercer número:'));
  
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      alert('Por favor ingrese valores válidos para los tres números.');
    } else {
      calcularMayor(num1, num2, num3);
    }
  }
  
  solicitarNumeros();
  