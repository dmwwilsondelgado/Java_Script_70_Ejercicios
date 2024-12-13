// Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12 
// caracteres, y al menos una mayúscula, una minúscula, y un dígito
function comprobarContraseña() {
    let contraseña = prompt("Ingresa tu contraseña---->:");
  
    let longitudValida = contraseña.length >= 8 && contraseña.length <= 12;
    let tieneMayuscula = /[A-Z]/.test(contraseña);
    let tieneMinuscula = /[a-z]/.test(contraseña);
    let tieneDigito = /\d/.test(contraseña);
  
    if (longitudValida && tieneMayuscula && tieneMinuscula && tieneDigito) {
      alert(`La contraseña es segura.  :D`);
    } else {
      let mensaje = `La contraseña no es segura. Debe cumplir con los siguientes requisitos:\n`;
      if (!longitudValida) mensaje += `------ Tener entre 8 y 12 caracteres.\n`;
      if (!tieneMayuscula) mensaje += `------ Tener al menos una letra mayúscula.\n`;
      if (!tieneMinuscula) mensaje += `------ Tener al menos una letra minúscula.\n`;
      if (!tieneDigito) mensaje += `------ Tener al menos un dígito.\n`;
      alert(mensaje);
    }
  }
  
  comprobarContraseña();
  