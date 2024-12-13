// ingrese una frase que lo identifique como programador de Software y luego mostrar esta 
// frase invertida
function invierte(frase) {
    return frase.split('').reverse().join('');
  }
  function ingresa() {
    var frase = prompt('Ingrese una frase que lo identifique como programador de Software:');
    var fraseInvertida = invierte(frase);
    alert('La frase invertida es: ' + fraseInvertida);
  }
  
  ingresa();
  