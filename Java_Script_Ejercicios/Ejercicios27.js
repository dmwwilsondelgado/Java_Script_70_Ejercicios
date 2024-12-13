// Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha 
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final.
function calcPromedio() {
    let parcial1 = parseFloat(prompt("Ingresa la calificación del primer parcial:"));
    let parcial2 = parseFloat(prompt("Ingresa la calificación del segundo parcial:"));
    let parcial3 = parseFloat(prompt("Ingresa la calificación del tercer parcial:"));
    
    while (isNaN(parcial1) || isNaN(parcial2) || isNaN(parcial3)) {
      alert("Por favor, ingresa todas las calificaciones correctamente.");
      parcial1 = parseFloat(prompt("Ingresaa la calificación del primer parcial:"));
      parcial2 = parseFloat(prompt("Ingresa la calificación del segundo parcial:"));
      parcial3 = parseFloat(prompt("Ingresa la calificación del tercer parcial:"));
    }
  
    let examenFinal = parseFloat(prompt("Ingreesa la calificación del examen final:"));
    while (isNaN(examenFinal)) {
      examenFinal = parseFloat(prompt("Por favor, ingresa una calificación válida para el examen final:"));
    }
  
    let trabajoFinal = parseFloat(prompt("Ingreesa la calificación del trabajo final:"));
    while (isNaN(trabajoFinal)) {
      trabajoFinal = parseFloat(prompt("Por favorr, ingresa una calificación válida para el trabajo final:"));
    }
  
    let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    let promedioFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);
    alert("El promedio final es: " + promedioFinal.toFixed(2));
  }
  
  calcPromedio();
  