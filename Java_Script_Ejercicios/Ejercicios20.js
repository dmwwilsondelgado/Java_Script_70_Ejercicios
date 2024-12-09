// Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo 
// grado: a * x2 + b + x + c, siendo X un valor constante

function algoritmo(a, b, c, v) {
    const resultado = (a * x2 + b + x + c);
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
llamar();