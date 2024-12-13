// Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean 
// positivos: área triangulo= lado * lado

function calculamos(lado1, lado2) {
    if (lado1 <= 0 || lado2 <= 0) {
      alert('Los lados deben ser positivos.');
    } else {
      let area = lado1 * lado2;
      alert('El área del rectángulo es: ' + area);
    }
  }
  
  function solicitar() {
    let lado1 = parseFloat(prompt('Ingrese el primer lado del rectángulo:'));
    let lado2 = parseFloat(prompt('Ingrese el segundo lado del rectángulo:'));
  
    if (isNaN(lado1) || isNaN(lado2)) {
      alert('Por favor ingrese valores válidos para los lados.');
    } else {
      calculamos(lado1, lado2);
    }
  }
  
  solicitar();
  