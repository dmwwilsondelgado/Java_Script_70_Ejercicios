// Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un 
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo). 
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo 
// en segundos.

function tiewpo() {
    const radio = parseFloat(prompt("Ingresa el radio de la base del depósito (en metros):"));
    const altura = parseFloat(prompt("Ingresa la altura del depósito (en metros):"));
    const caudal = parseFloat(prompt("Ingresa el caudal (litros por segundo):"));
  
    const volumen = Math.PI * Math.pow(radio, 2) * altura * 1000;
    const tiempoSegundos = volumen / caudal;
    const tiempoMinutos = tiempoSegundos / 60;
  
    alert(`El tiempo estimado para llenar el depósito es: ${tiempoMinutos.toFixed(2)} minutos.`);
  }
  
  tiewpo();
  