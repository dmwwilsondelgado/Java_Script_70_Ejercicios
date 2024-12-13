// Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados 
// de: Iva, Subtotal y Total de la compra de los artículos.
function calcularCompra(productos) {
    let subtotal = 0;
    for (let i = 0; i < productos.length; i++) {
      subtotal += productos[i];
    }
  
    let iva = subtotal * 0.19; // Suponiendo un IVA del 19%
    let total = subtotal + iva;
  
    alert('Subtotal: $' + subtotal + '\nIVA: $' + iva + '\nTotal de la compra: $' + total);
  }
  
  function solicitarProductos() {
    let productos = [];
    for (let i = 1; i <= 5; i++) {
      let precio = parseFloat(prompt('Ingrese el precio del producto ' + i + ':'));
      if (isNaN(precio) || precio <= 0) {
        alert('Por favor ingrese un valor válido para el precio del producto.');
        return;
      }
      productos.push(precio);
    }
    calcularCompra(productos);
  }
  
  solicitarProductos();
  