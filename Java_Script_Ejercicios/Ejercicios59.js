// . En un colegio, se necesita hacer una selección de basquetbol que represente al colegio, 
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19 
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75
function seleccionarJugador() {
    // Solicitar los datos del postulante
    let edad = parseInt(prompt("Ingrese su edad:"));
    let estatura = parseFloat(prompt("Ingrese su estatura en cm:"));
    let peso = parseFloat(prompt("Ingrese su peso en kg:"));
  
    // Verificar si cumple con los requisitos
    if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
      alert("¡Felicidades! Cumples con los requisitos para ser parte de la selección de basquetbol.");
    } else {
      alert("Lo siento, no cumples con los requisitos para ser parte de la selección de basquetbol.");
    }
  }
  
  seleccionarJugador();
  