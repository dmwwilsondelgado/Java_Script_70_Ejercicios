// Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada 
// producto y el total de la compra


function calcularCompra() {
    let precioProducto1 = parseFloat(prompt("------------Ingresa el precio del primer producto:------------"));
    let precioProducto2 = parseFloat(prompt("------------Ingresa el precio del segundo producto:------------"));
    let precioProducto3 = parseFloat(prompt("------------Ingresa el precio del tercer producto:------------"));
    let precioProducto4 = parseFloat(prompt("------------Ingresa el precio del cuarto producto:------------"));
    let precioProducto5 = parseFloat(prompt("------------Ingresa el precio del quinto producto:------------"));
  

    let descuento1 = precioProducto1 * 0.05;
    let descuento2 = precioProducto2 * 0.05;
    let descuento3 = precioProducto3 * 0.02;
    let descuento4 = precioProducto4 * 0.02;
    let descuento5 = precioProducto5 * 0.02;
    let precioFinal1 = precioProducto1 - descuento1;
    let precioFinal2 = precioProducto2 - descuento2;
    let precioFinal3 = precioProducto3 - descuento3;
    let precioFinal4 = precioProducto4 - descuento4;
    let precioFinal5 = precioProducto5 - descuento5;
  
    // esto parece python 
    let totalCompra = precioFinal1 + precioFinal2 + precioFinal3 + precioFinal4 + precioFinal5;
  
    alert(`Precio del primer producto con descuento: $${precioFinal1.toFixed(2)}`);
    alert(`Precio del segundo producto con descuento: $${precioFinal2.toFixed(2)}`);
    alert(`Precio del tercer producto con descuento: $${precioFinal3.toFixed(2)}`);
    alert(`Precio del cuarto producto con descuento: $${precioFinal4.toFixed(2)}`);
    alert(`Precio del quinto producto con descuento: $${precioFinal5.toFixed(2)}`);
    alert(`El total de la compra es: $${totalCompra.toFixed(2)}`);
  }
  
  calcularCompra();
  