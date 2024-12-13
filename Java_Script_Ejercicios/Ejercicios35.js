// Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada 
// uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. 
// Después de pagar le sobran $91000. ¿Cuánto dinero tenía?


function calcularDineroInicial() {
    alert(`Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada 
           uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. 
           Después de pagar le sobran $91000. ¿Cuánto dinero tenía?`)
    // Precios de los productos
    let precioLlaves = 11500;
    let precioBomba = 1168000;
    let precioCajaPernos = 87000;
  
    // Cantidades compradas
    let cantidadLlaves = 5;
    let cantidadPernos = 3;
  
    // Dinero sobrante
    let dineroSobrante = 91000;

    let totalLlaves = precioLlaves * cantidadLlaves;
    let totalBomba = precioBomba;
    let totalPernos = precioCajaPernos * cantidadPernos;
  
    // Calcular el dinero total que tenía el jefe de obra
    let dineroTotal = totalLlaves + totalBomba + totalPernos + dineroSobrante;
  
    // Mostrar el resultado
    alert(`El jefe de obra tenía $${dineroTotal.toFixed(2)} antes de hacer las compras.`);
  }
  
  calcularDineroInicial();
  