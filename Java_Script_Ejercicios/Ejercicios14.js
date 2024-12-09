// Escribir un programa que calcule el área de un triángulo.
// Función para calcular el área del triángulo
const calcularAreaTriangulo = function() {
    let base = prompt('Ingrese la base del triángulo:');
    let altura = prompt('Ingrese la altura del triángulo:');
    try {
        base = parseFloat(base);
        altura = parseFloat(altura)
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

calcularAreaTriangulo();