// Closure nos da una idea de trabajar similar a como lo hacemos con los metodos de objetos.
// Una variable tendra distintos tipos de retorno. Me aseguro de acceder a una funcion determinada.
// Una norma al trabajar con closures es que el nombre del archivo sea el mismo que la variable que se declara dentro, como una biblioteca

// Lo correcto seria usar const pues guardamos en la variable matematicas, la direccion de memoria de la funcion autoinvocable, a la cual accederemos a traves de los distintos retornos que querramos
const matematicas = (function () {
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
  }
  function dividir(a, b) {
    if (!validarCero(b)) {
      return a / b;
    }
  }

  return {
    // Para retornar puedo hacer conjuntos clave:valor
    // Clave con la que accedo: Retorno de la funcion indicada
    // restar (accedo mediante matematicas.restar): restar (retorno de la funcion restar)
    // En js, la sintaxis clave: valor se simplifica de la siguiente manera
    // Ojo, la clave tiene que tener el mismo nombre que el valor a retornar
    restar,
    sumar,
    multiplicar,
    dividir,
  };
})();

(function a() {})(); 
// Funcion autoinvocada, cuando el compilador la lee, ejecuta lo que este dentro
// En caso de no ser autoinvocada, el compilador al leerla guarda su nombre (direccion de memoria) en la mem estatica y su contenido en la memoria estatica a la espera de ser llamada para invocarla
