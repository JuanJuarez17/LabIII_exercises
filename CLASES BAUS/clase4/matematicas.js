function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function validarCero(a) {
    return a === 0;
    // Retorno un boolean. Si a = 0 es true, si a != 0 es false.
    // Comapracion de tipo
    // "1" == 1 es true - Compara valor
    // "1" === 1 es false - Compara valor y tipo
    // "1" != es false - Tienen distinto tipo pero igual valor
    // "1" !== es true - Tienen distinto tipo y valor
    // = es asginacion
    // == Comparas por valor
    // === Comparas por valor y tipo
}
function dividir(a, b) {
  if (validarCero(b)) {
    return a / b;
  }
}
