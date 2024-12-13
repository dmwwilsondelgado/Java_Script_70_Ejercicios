// Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los 
// años que ha cumplido (desde 1 hasta su edad)

function mostrarAñosCumplidos() {
    // Solicitar al usuario su edad
    let edad = parseInt(prompt("¿Cuántos años tienes?"));
  
    // Mostrar todos los años que ha cumplido
    for (let i = 1; i <= edad; i++) {
      alert("Has cumplido " + i + " años");
    }
  }
  
  mostrarAñosCumplidos();
  