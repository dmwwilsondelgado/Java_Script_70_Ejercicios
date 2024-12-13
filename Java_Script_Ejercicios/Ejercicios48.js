// . Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica 
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio


function calcularAreaFigura(figura) {
    const PI = Math.PI;
  
    if (figura === 'T' || figura === 't') {
      let base = parseFloat(prompt('Ingrese la base del triángulo:'));
      let altura = parseFloat(prompt('Ingrese la altura del triángulo:'));
      
      if (isNaN(base) || isNaN(altura)) {
        alert('Por favor ingrese valores válidos para base y altura.');
      } else {
        let areaTriangulo = (base * altura) / 2;
        alert('El área del triángulo es: ' + areaTriangulo);
      }
    } else if (figura === 'C' || figura === 'c') {
      let radio = parseFloat(prompt('Ingrese el radio del círculo:'));
  
      if (isNaN(radio)) {
        alert('Por favor ingrese un valor válido para el radio.');
      } else {
        let areaCirculo = PI * Math.pow(radio, 2);
        alert('El área del círculo es: ' + areaCirculo);
      }
    } else {
      alert('Selección inválida. Escriba T para Triángulo o C para Círculo.');
    }
  }
  
  function solicitar() {
    let figura = prompt('¿Qué figura desea calcular? Escriba T para Triángulo o C para Círculo:');
    calcularAreaFigura(figura);
  }
  
  solicitar();
  