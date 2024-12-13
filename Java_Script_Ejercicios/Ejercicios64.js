// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla 
// todos los números impares desde 1 hasta ese número separados por coma.

function mostrarImpares() {
    // Solicitar al usuario un número entero positivo
    let numero = parseInt(prompt("Ingresa un número entero positivo:"));
  
    // Verificar que el número sea positivo
    if (numero > 0) {
      let impares = "";
  
      // Bucle para encontrar y agregar los números impares
      for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
          // Si es impar, agregarlo a la cadena
          impares += i;
          
          // Si no es el último número, agregar coma
          if (i < numero - 1) {
            impares += ", ";
          }
        }
      }
  
      // Mostrar los números impares
      alert(impares);
    } else {
      alert("Por favor, ingresa un número entero positivo.");
    }
  }
  
  mostrarImpares();
  