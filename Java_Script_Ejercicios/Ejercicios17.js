// Escribir un programa que calcule el volumen de una esfera.
function calcularVolumenEsfera(radio) {
    return (4 / 3) * Math.PI * Math.pow(radio, 3);
}
function main() {
    const radio = parseFloat(prompt("Introduce el radio de la esfera:"));
    if (isNaN(radio) || radio < 0) {
        console.log("Por favor, introduce un número válido y no negativo.");
    } else {
        const volumen = calcularVolumenEsfera(radio);
        console.log(`El volumen de la esfera con radio ${radio} es: ${volumen.toFixed(2)}`);
    }
}
main();