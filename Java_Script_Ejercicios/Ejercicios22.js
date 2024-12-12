// Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada 
// minuto cuesta $355 pesos y un IVA 20%.

function llamadacosto() {
    let minutos = prompt("Ingrese la duración de la llamada en minutos:");
    minutos = parseFloat(minutos);

    const costoPorMinuto = 355;
    const iva = 0.20;

    let costoSinIVA = minutos * costoPorMinuto;
    let valorIVA = costoSinIVA * iva;
    let costoTotal = costoSinIVA + valorIVA;
    alert(`El costo de la llamada es $${costoTotal.toFixed(2)} pesos.`);
}

llamadacosto();
