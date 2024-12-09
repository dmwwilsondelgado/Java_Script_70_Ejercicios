// Escribir un programa que calcule el área y el volumen de un cilindro.

function calcular(radio, altura) {
    const pi = Math.PI;
    const areaLateral = 2 * pi * radio * altura;
    const areaTotal = 2 * pi * radio * (radio + altura);
    const volumen = pi * Math.pow(radio, 2) * altura;

    return {
        areaLateral: areaLateral,
        areaTotal: areaTotal,
        volumen: volumen
    };
}

function ingresar() {
    const radio = parseFloat(prompt("Introduce el radio del cilindro:"));
    const altura = parseFloat(prompt("Introduce la altura del cilindro:"));
    if (isNaN(radio) || isNaN(altura) || radio < 0 || altura < 0) {
        alert("Por favor, introduce números válidos y no negativos.");
        return;
    }
    const resultado = calcular(radio, altura);
    alert(`Área lateral: ${resultado.areaLateral.toFixed(2)}`);
    alert(`Área total: ${resultado.areaTotal.toFixed(2)}`);
    alert(`Volumen: ${resultado.volumen.toFixed(2)}`);
}

ingresar();