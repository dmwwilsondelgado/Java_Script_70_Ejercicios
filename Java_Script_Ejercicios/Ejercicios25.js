// Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa 
// que ingresando el costo de los medicamentos calcule el descuento y el precio final.
function calcularDescuento() {
    alert("________Bienbenidos a dorguerias el Mewdicamento _________");
    let costo = parseFloat(prompt("---------Ingresaa el costo de los medicamentos-----------"));
    let descuento = costo * 0.10;
    let precioFinal = costo - descuento;
    alert("Descuento aplicado: " + descuento.toFixed(2) + "\nPrecio final: " + precioFinal.toFixed(2));
  }
  
  calcularDescuento();
  