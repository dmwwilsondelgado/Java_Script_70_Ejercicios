// Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual 
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos 
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60


function obtenerCalificaciones() {
    let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos:"));
    
    let notaAlta = 0;
    let notaBaja = 100;
    let maxNota100 = 0;
    let rangoA = 0;
    let rangoB = 0;
    let rangoC = 0;
    let rangoD = 0;
    
    // Ingresar las notas de los alumnos
    for (let i = 0; i < cantidadAlumnos; i++) {
      let nota = parseInt(prompt("Ingrese la nota del alumno #" + (i + 1) + ":"));
  
      // Verificar la nota alta, baja y contar las calificaciones
      if (nota > notaAlta) {
        notaAlta = nota;
      }
      if (nota < notaBaja) {
        notaBaja = nota;
      }
      if (nota === 100) {
        maxNota100++;
      } else if (nota >= 90) {
        rangoA++;
      } else if (nota >= 80) {
        rangoB++;
      } else if (nota >= 70) {
        rangoC++;
      } else if (nota >= 60) {
        rangoD++;
      }
    }
  
    // Imprimir los resultados
    alert("La nota más alta fue: " + notaAlta);
    alert("La nota más baja fue: " + notaBaja);
    alert("Cantidad de alumnos con la máxima nota de 100: " + maxNota100);
    alert("Cantidad de alumnos con nota 'A' (90-100): " + rangoA);
    alert("Cantidad de alumnos con nota 'B' (80-89): " + rangoB);
    alert("Cantidad de alumnos con nota 'C' (70-79): " + rangoC);
    alert("Cantidad de alumnos con nota 'D' (60-69): " + rangoD);
  }
  
  obtenerCalificaciones();
  