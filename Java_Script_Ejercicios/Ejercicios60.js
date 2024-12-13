// Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que 
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad 
// de cursos es mayor que 6 el pago será únicamente de $1.200.000

function calcularPago() {
    // Solicitar la cantidad de cursos
    let cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos que lleva el alumno:"));
  
    // Verificar el pago según la cantidad de cursos
    let pago;
    if (cantidadCursos < 6) {
      pago = cantidadCursos * 2000000; // Si tiene menos de 6 cursos
    } else {
      pago = cantidadCursos * 1200000; // Si tiene 6 o más cursos
    }
  
    // Mostrar el resultado
    alert("El pago total por " + cantidadCursos + " cursos es: $" + pago);
  }
  
  calcularPago();
  