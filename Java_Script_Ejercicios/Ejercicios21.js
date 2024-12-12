// Escribir un programa que calcule el volumen de un elipsoide.
function calcularVolu() {
    let radioA = prompt("Ingrese el radio a del elipsoide:");
    let radioB = prompt("Ingrese el radio b del elipsoide:");
    let radioC = prompt("Ingrese el radio c del elipsoide:");
    radioA = parseFloat(radioA);
    radioB = parseFloat(radioB);
    radioC = parseFloat(radioC);
    const volumen = (4/5) * Math.PI * radioA * radioB * radioC;
    alert(`El volumen del elipsoide es ${volumen.toFixed(2)} unidades cúbicas.`);
}

calcularVolu();