// Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el 
// monto total de la venta, según la cantidad de artículos solicitados durante el día.

function calcularMontoTotal(libros, cuadernos, lapiceros) {
    let precioLibro = 10000;
    let precioCuaderno = 7550;
    let precioLapicero = 5550;
    
    let total = (libros * precioLibro) + (cuadernos * precioCuaderno) + (lapiceros * precioLapicero);
    return total;
  }
  
  function solicitamos() {
    let libros = parseInt(prompt('Ingrese la cantidad de libros vendidos:'));
    let cuadernos = parseInt(prompt('Ingrese la cantidad de cuadernos vendidos:'));
    let lapiceros = parseInt(prompt('Ingrese la cantidad de lapiceros vendidos:'));
    
    if (isNaN(libros) || isNaN(cuadernos) || isNaN(lapiceros)) {
      alert('Por favor, ingrese cantidades válidas.');
    } else {
      let montoTotal = calcularMontoTotal(libros, cuadernos, lapiceros);
      alert('El monto total de la venta es: $' + montoTotal);
    }
  }
  
  solicitamos();
  