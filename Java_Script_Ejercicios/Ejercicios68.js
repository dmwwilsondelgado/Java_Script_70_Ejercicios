// Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10.
function mostrarTablas() {
    for (let i = 1; i <= 10; i++) {
      alert(`Tabla de multiplicar del ${i}:`);
      
      for (let j = 1; j <= 10; j++) {
        alert(`${i} x ${j} = ${i * j}`);
      }
      alert(""); 
    }
  }
  
  mostrarTablas();
  