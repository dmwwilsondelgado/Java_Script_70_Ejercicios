// Escribir un programa que calcule el área de un rectángulo:
// -----------------------------
alert("Calcular el área del triángulo");
let base = prompt('Ingrese la base del rectangulo');
let altura = prompt('Ingrese la altura del rectangulo');

const calcularAreaRect = function(base, altura) {
    try {
        base = parseFloat(base);
        altura = parseFloat(altura);
        if (isNaN(base) || isNaN(altura)) {
            throw new Error("Error: ambos valores deben ser números válidos.");
        }
        if (base <= 0 || altura <= 0) {
            throw new Error("Error: la base y la altura deben ser mayores que cero.");
        }
        const area = (base * altura) / 2;
        alert(`El área del triángulo con base ${base} y altura ${altura} es: ${area}`);

    } catch (error) {
        alert(error.message);
    }
}
calcularAreaRect(base,altura);