// . Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre 
// por pantalla el número de veces que aparece la letra en la frase.


let frase = prompt("Introduce una frase:");
let letra = prompt("Introduce una letra:");

let contador = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === letra) {
    contador++;
  }
}

alert("La letra '" + letra + "' aparece " + contador + " veces en la frase.");
