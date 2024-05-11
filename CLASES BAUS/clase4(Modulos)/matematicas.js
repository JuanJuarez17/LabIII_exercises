// export function sumar(a, b) {
//   return a + b;
// }
// Esta es una forma de exportar una funcion a un modulo, sino se puede exportar de la otra forma

function sumar(a, b) {
  return a + b;
}
// La funcion se puede escribir como anonima
// export default function(a, b){
//   return a+ b;
// }

// Funcion anonima cuya direccion de memoria se guarda en una const
// const sumar = function(a, b){
//   return a + b;
// }

function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function validarCero(a) {
  return a === 0;
}
// Si exporto por default, en el import no hace falta poner el nombre de la funcion entre llaves
// Solo se puede tener un export default
// export default function dividir(a, b) {
//   if (!validarCero(b)) {
//     return a / b;
//   }
// }
function dividir(a, b) {
  if (!validarCero(b)) {
    return a / b;
  }
}

// Para exportar una o mas funciones
// export { sumar, restar };

// Para exportar todas las funciones del script (o las que desee) por default
export default { sumar, restar, multiplicar, dividir };

// Otra diferencia entre export y export default
// cuando uso export, se manda a llamar a la funcion del modulo en cuestion cuando es invocada desde el script
// Cuando uso export default la funcion esta disponible instantaneamente.