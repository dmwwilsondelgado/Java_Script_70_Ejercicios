// Una empresa que contrata personal requiere determinar la edad de las personas que 
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que 
// nacieron. Realice el código que representen el algoritmo para solucionar este problema.
const calcularEdad = (anioNacimiento) => {
    const anioActual = new Date().getFullYear();
    return anioActual - anioNacimiento;
  }
  
  const solicitamosedad = () => {
    const anioNacimiento = parseInt(prompt('Ingrese su año de nacimiento:'));
    const edad = calcularEdad(anioNacimiento);
    alert(`Su edad es de ${edad} años.`);
  }
  
  solicitamosedad();
  