// Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil 
// expresada en kilómetros por hora, proporcione la velocidad en metros por segundo.
function velocidadKmh() {
    const velocidadKmh = parseFloat(prompt("Ingrese la velocidad del automóvil en km/h:"));
    const velocidadMs = velocidadKmh * (1000 / 3600);
    alert(`La velocidad de l automóvil es ${velocidadMs.toFixed(2)} metros por segundo.`);
}
velocidadKmh();
