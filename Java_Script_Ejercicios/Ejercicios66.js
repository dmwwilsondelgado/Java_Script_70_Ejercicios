// . Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el 
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que 
// dura la inversión.

function calculando() {
    let cantidadInversion = parseFloat(prompt("Ingresa la cantidad a invertir:"));
    let interesAnual = parseFloat(prompt("Ingresa el interés anual (en porcentaje):")) / 100;
    let numeroAnios = parseInt(prompt("Ingresa el número de años:"));
    if (cantidadInversion > 0 && interesAnual > 0 && numeroAnios > 0) {
      let capital = cantidadInversion;
  
      for (let i = 1; i <= numeroAnios; i++) {
        capital += capital * interesAnual; 
        alert(`Año ${i}: Capital obtenido = $${capital.toFixed(2)}`);
      }
    } else {
      alert("Por favor, ingresa valores positivos para la inversión, el interés y el número de años.");
    }
}
  
calculando();
  