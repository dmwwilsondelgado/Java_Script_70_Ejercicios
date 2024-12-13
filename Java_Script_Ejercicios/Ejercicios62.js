// Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces
function mostrarPalabra() {
    // Solicitar al usuario que ingrese una palabra
    let palabra = prompt("Ingrese una palabra:");
  
    // Mostrar la palabra 10 veces
    for (let i = 0; i < 10; i++) {
      alert(palabra);
    }
  }
  
  mostrarPalabra();
  