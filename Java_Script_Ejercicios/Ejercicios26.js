// Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.

function convert() {
    let gradosCelsius = parseFloat(prompt(":::::::::Ingresa la temperatura en grados Celsius::::::::::::"));
    while (isNaN(gradosCelsius)) {
      gradosCelsius = parseFloat(prompt("Por favor, ingresa un número válido para los grados Celsius:"));
    }
    let gradosFahrenheit = (gradosCelsius * 9/5) + 32;
    let mensaje = `La conversión de ${gradosCelsius}°C a Fahrenheit es:\n`;
    mensaje += `${gradosCelsius}°C = ${gradosFahrenheit.toFixed(2)}°F`; //aca ando concatenando 
  
    if (gradosCelsius < 0) {
      mensaje += "\nNota: La temperatura está por debajo del punto de congelación.";
    } else if (gradosCelsius > 30) {
      mensaje += "\nNota: La temperatura está bastante altaa.";
    } else {
      mensaje += "\nNota: La temperatura está en un rango moderado.";
    }
  
    alert(mensaje);
  }
  
  convert();
  