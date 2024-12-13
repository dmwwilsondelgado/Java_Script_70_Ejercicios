// Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para 
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos


function calcularPromedio() {
    let calificacion1 = parseFloat(prompt("Ingresa la calificación del primer examen (1-5):"));

    if (calificacion1 < 1 || calificacion1 > 5 || isNaN(calificacion1)) {
      alert("Calificación inválida para el primer examen. Se asignará un 0.");
      calificacion1 = 0;
    }
  
    let calificacion2 = parseFloat(prompt("Ingresa la calificación del segundo examen (1-5):"));
    if (calificacion2 < 1 || calificacion2 > 5 || isNaN(calificacion2)) {
      alert("Calificación inválida para el segundo examen. Se asignará un 0.");
      calificacion2 = 0;
    }
  
    let calificacion3 = parseFloat(prompt("Ingresa la calificación del tercer examen (1-5):"));
    if (calificacion3 < 1 || calificacion3 > 5 || isNaN(calificacion3)) {
      alert("Calificación inválida para el tercer examen. Se asignará un 0.");
      calificacion3 = 0;
    }
  
    let calificacion4 = parseFloat(prompt("Ingresa la calificación del cuarto examen (1-5):"));
    if (calificacion4 < 1 || calificacion4 > 5 || isNaN(calificacion4)) {
      alert("Calificación inválida para el cuarto examen. Se asignará un 0.");
      calificacion4 = 0;
    }
  
    let promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;
  
    let mensaje = `El promedio de las calificaciones es: ${promedio.toFixed(2)}\n`;
  
    if (promedio >= 4.5) {
      mensaje += "Excelente desempeñoo";
    } else if (promedio >= 3.5) {
      mensaje += "Buen desempeño.";
    } else if (promedio >= 2.5) {
      mensaje += "Desempeño promedio.";
    } else {
      mensaje += "Necesitas mejorar.";
    }
  
    alert(mensaje);
  }
  
  calcularPromedio();
  