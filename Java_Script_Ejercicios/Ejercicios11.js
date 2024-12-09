// Escribir un programa que sume, resta, multiplique y divida dos números.
let suma = "dd";

let elija = parseInt(prompt('Seleciona la operacion \n1.Suma\n2.Resta\n3.Multiplicacion\n4.Division'));
const operador = function(elija) {
    if (elija >= 1 && elija <= 4) {
        let num1 = parseInt(prompt('Ingrese el primer numero'));
        let num2 = parseInt(prompt('Ingrese el segundo numero'));
        if (elija === 1) {
            let suma = num1 + num2 ;
            alert(`El resultado dela suma ${num1} y ${num2} es : ${suma}`);
        }
        else if (elija === 2) {
            let resta = num1 - num2 ;
            alert(`El resultado dela resta ${num1} y ${num2} es : ${resta}`);
        }
        else if (elija === 3) {
            let multiplicacion = num1 * num2 ;
            alert(`El resultado dela multiplicacion ${num1} y ${num2} es : ${multiplicacion}`);
        }
        else if (elija === 4) {
            let division = num1 / num2 ;
            alert(`El resultado dela division${num1} y ${num2} es : ${division}`);
        }
    }
    else {
        alert('Por favor ingrese un numero valido para hacer la Operacion');
    }
}
operador(elija);
prompt("Graciaas por usar Nuestro Programa");