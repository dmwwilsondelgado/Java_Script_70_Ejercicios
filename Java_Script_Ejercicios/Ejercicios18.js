// Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b
function evaluarExpresion(a, b, c, v) {
    const resultado = (a + 7 * c) / (b + 2 - a) + 2 * b * v;
    return resultado;
}

function llamar() {
    const a = parseFloat(prompt("Introduce el valor de a:"));
    const b = parseFloat(prompt("Introduce el valor de b:"));
    const c = parseFloat(prompt("Introduce el valor de c:"));
    const v = parseFloat(prompt("Introduce el valor de v:"));

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(v)) {
        alert("Por favor, introduce números válidos.");
        return;
    }
    const resultado = evaluarExpresion(a, b, c, v);
    
    alert(`El resultado de la expresión es: ${resultado}`);
}

// Llama a la función principal para ejecutar el programa
llamar();