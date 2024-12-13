// Escribir un programa que pida al usuario un número entero y muestre por pantalla un 
// triángulo rectángulo como el de más abajo, de altura el número introducido
function dibujarTriangulo() {
    // Solicitar al usuario un número entero
    let altura = parseInt(prompt("Ingresa un número entero para la altura del triángulo:"));
  
    // Verificar si el número ingresado es positivo
    if (altura > 0) {
      // Dibujar el triángulo
      for (let i = 1; i <= altura; i++) {
        let linea = "";
        for (let j = 1; j <= i; j++) {
          linea += "*";  // Agregar un asterisco por cada nivel
        }
        console.log(linea); // Mostrar la línea del triángulo
      }
    } else {
      alert("Por favor, ingresa un número entero positivo.");
    }
  }
  
  dibujarTriangulo();
  