// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla 
// la cuenta atrás desde ese número hasta cero separados por comas.
function cuentaAtras() {
    // Solicitar al usuario un número entero positivo
    let numero = parseInt(prompt("Ingresa un número entero positivo:"));
  
    // Verificar que el número sea positivo
    if (numero > 0) {
      let cuenta = "";
  
      // Bucle para contar hacia atrás desde el número hasta cero
      for (let i = numero; i >= 0; i--) {
        cuenta += i;
  
        // Si no es el último número (cero), agregar coma
        if (i > 0) {
          cuenta += ", ";
        }
      }
  
      // Mostrar la cuenta atrás
      alert(cuenta);
    } else {
      alert("Por favor, ingresa un número entero positivo.");
    }
  }
  
  cuentaAtras();
  