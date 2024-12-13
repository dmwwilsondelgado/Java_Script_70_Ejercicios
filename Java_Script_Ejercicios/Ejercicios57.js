// Consideramos la asignación de una calificación literal a un rango dado de calificaciones 
// numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación 
// de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8 
// Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No 
// Aprobado

function asignarCalificacion(nota) {
    let calificacion;
  
    if (nota >= 9.1 && nota <= 10) {
      calificacion = 'A (Excelente)';
    } else if (nota >= 8.1 && nota < 9) {
      calificacion = 'A (Muy bien)';
    } else if (nota >= 7.5 && nota < 8) {
      calificacion = 'A (Bien)';
    } else if (nota < 7.5) {
      calificacion = 'NA (No Aprobado)';
    } else {
      alert('La calificación ingresada es fuera de rango.');
      return;
    }
  
    alert('La calificación numérica es: ' + nota + '\nLa calificación literal es: ' + calificacion);
  }
  
  function solicito() {
    let nota = parseFloat(prompt('Ingrese la calificación numérica:'));
  
    if (isNaN(nota) || nota < 0 || nota > 10) {
      alert('Por favor ingrese una calificación válida entre 0 y 10.');
    } else {
      asignarCalificacion(nota);
    }
  }
  
  solicito();
  