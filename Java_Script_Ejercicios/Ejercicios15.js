// . Escribir un programa que calcule la longitud y el área de una circunferencia
const calcularAreaCircuffenrencia = function() {
    let base = prompt('Ingrese la base del circuferencia:');
    let altura = prompt('Ingrese la altura del circufereencia:');
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

calcularAreaCircuffenrencia();