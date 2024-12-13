// . Escribir un programa que pida al usuario un número entero y muestre por consola un 
// triángulo rectángulo como el de más abajo

// Función que genera el triángulo rectángulo
function mostrarTriangulo() {
    // Pedir al usuario un número entero
    let altura = parseInt(prompt("Ingresa la altura del triángulo:"));
  
    // Verificar si la entrada es válida
    if (isNaN(altura) || altura <= 0) {
      console.log("Por favor, ingresa un número entero positivo.");
      return;
    }
  
    // Generar el triángulo rectángulo
    for (let i = 1; i <= altura; i++) {
      let fila = "";
      for (let j = 1; j <= i; j++) {
        fila += "*";  // Añadir un asterisco por cada columna
      }
      console.log(fila);  // Mostrar cada fila del triángulo
    }
  }
  
  // Llamar a la función para mostrar el triángulo
  mostrarTriangulo();
  