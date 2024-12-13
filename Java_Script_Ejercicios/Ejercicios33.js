// Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos

function calcularEdadMadre() {
    let añoNacimientoMadre = parseInt(prompt("Ingresa el año de nacimiento de la madre:"));
    let añoNacimientoHijo = parseInt(prompt("Ingresa el año de nacimiento del hijo:"));
    let edadMadreAlDarALuz = añoNacimientoHijo - añoNacimientoMadre;

    return alert(`La madre tenía ${edadMadreAlDarALuz} años cuando dio a luz a su hijo.`);
  }
  
  calcularEdadMadre();
  