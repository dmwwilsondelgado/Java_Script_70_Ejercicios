// Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede 
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.


function calcularPago(consumo) {
    let descuento = 0;
  
    if (consumo > 130000) {
      descuento = consumo * 0.15; // 15% de descuento
    }
  
    let totalPago = consumo - descuento;
    alert('El consumo fue: $' + consumo + '\nDescuento aplicado: $' + descuento + '\nTotal a pagar: $' + totalPago);
  }
  
  function consumos() {
    let consumo = parseFloat(prompt('Ingrese el total de consumo en el restaurante:'));
  
    if (isNaN(consumo) || consumo < 0) {
      alert('Por favor ingrese un valor válido para el consumo.');
    } else {
      calcularPago(consumo);
    }
  }
  
  consumos();
  