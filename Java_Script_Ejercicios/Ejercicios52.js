// En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es 
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora 
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de 
// horas trabajadas.

function calcularPago(tipoEmpleado, horasTrabajadas) {
    let pagoPorHora;
  
    if (tipoEmpleado === 'planta') {
      pagoPorHora = 20000;
    } else if (tipoEmpleado === 'administrativo') {
      pagoPorHora = 10000;
    } else {
      alert('Tipo de empleado inválido');
      return;
    }
  
    let totalPago = horasTrabajadas * pagoPorHora;
    alert('El pago total por ' + horasTrabajadas + ' horas trabajadas es: $' + totalPago);
  }
  
  function datos() {
    let tipoEmpleado = prompt('Ingrese el tipo de empleado (planta/administrativo):').toLowerCase();
    let horasTrabajadas = parseFloat(prompt('Ingrese el total de horas trabajadas:'));
  
    if (isNaN(horasTrabajadas) || horasTrabajadas <= 0) {
      alert('Por favor ingrese un valor válido para las horas trabajadas.');
    } else {
      calcularPago(tipoEmpleado, horasTrabajadas);
    }
  }
  
  datos();
  