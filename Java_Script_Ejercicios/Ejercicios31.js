// Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la 
// solución, por favor utilizar funciones matemáticas para ello.:
// a. rc((x2-x1)^2 + (y2-y1)^2).

function calcularDistancia() {
    let x1 = parseFloat(prompt("Ingresa la coordenada x1 del primer punto:"));
    let y1 = parseFloat(prompt("Ingresa la coordenada y1 del primer punto:"));
    let x2 = parseFloat(prompt("Ingresa la coordenada x2 del segundo punto:"));
    let y2 = parseFloat(prompt("Ingresa la coordenada y2 del segundo punto:"));
  
    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  
    alert(`La distancia entre los dos puntos es: ${distancia.toFixed(2)}`);
  }
  
  calcularDistancia();
  