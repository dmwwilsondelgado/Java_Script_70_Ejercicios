// En una tienda de HELADO da un descuento por compra a sus clientes con membresía 
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los 
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento.


function calcular(precio, tipoMembresia) {
    let descuento = 0;
  
    if (tipoMembresia === 'A') {
      descuento = precio * 0.10; 
    } else if (tipoMembresia === 'B') {
      descuento = precio * 0.15;
    } else if (tipoMembresia === 'C') {
      descuento = precio * 0.20; 
    } else {
      alert('Tipo de membresía no válido');
      return;
    }
  
    let total = precio - descuento;
    alert('Precio original: $' + precio + '\nDescuento: $' + descuento + '\nTotal a pagar: $' + total);
  }
  
  function solicito() {
    let precio = parseFloat(prompt('Ingrese el precio del helado:'));
    let tipoMembresia = prompt('Ingrese el tipo de membresía (A, B, C):').toUpperCase();
  
    if (isNaN(precio) || precio <= 0) {
      alert('Por favor ingrese un precio válido.');
    } else {
      calcular(precio, tipoMembresia);
    }
  }
  
  solicito();
  