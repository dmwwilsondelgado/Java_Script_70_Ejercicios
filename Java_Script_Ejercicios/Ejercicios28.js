// Calcular el sueldo de un empleado dados como datos de entrada: 
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora.
function empleado() {
    let nombre = prompt("------->Ingresa el nombre del empleado:");
    let horasTrabajo = parseFloat(prompt("----->Ingresa las horas trabajadas:"));
    let pagoHora = parseFloat(prompt("------>Ingresa el pago por hora:"));

    let sueldo = horasTrabajo * pagoHora;
    alert(`El sueldo de ${nombre} es: ${sueldo.toFixed(2)}`);
  }
  
  empleado();
  