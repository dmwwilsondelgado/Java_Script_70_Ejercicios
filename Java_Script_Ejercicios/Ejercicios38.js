// Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año. 
// Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué 
// parte le corresponde a Lorena?

const calcularParteLorena = () => {
    // Fracciones de Martín y Jairo
    let parteMartin = 2 / 3;
    let parteJairo = 1 / 4;
    let sumaPartes = parteMartin + parteJairo;
    
    let parteLorena = 1 - sumaPartes;
    alert(`A Lorena le corresponde ${parteLorena.toFixed(2)} del total de tapas de gaseosas.`);
  }
  
  calcularParteLorena();
  