// Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir 
// la presencia de comillas y caracteres escapados.

const texto = 'Este es un "ejemplo" con "comillas escapadas \\"aquí\\"" en la cadena.';
const regex = /"((?:[^"\\]|\\.)*)"/g;
let match;

while ((match = regex.exec(texto)) !== null) {
  alert(match[0]);  
}
