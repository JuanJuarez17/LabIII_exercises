// function saludar(){
//     alert("Hola mundo!!");
// }

// setTimeout(saludar,5000);

// setTimeOut es una funcion que recibe
// Funcion a invocar ---> Se pasa la funcion deseada como direccion de memoria (sin parentesis)
// Tiempo en ms luego del cual deseo invocar la funcion del parametro 1

// REFACTORIZANDO

// setTimeout(function(){
//     alert("Hola mundo!!");
// },8000);

// Cuando se pasa la funcion de esta manera dentro del parametro se conoce como pasar el literal de funcion, osea la funcion explicitamente
// Cuando ponemos function(){} se conoce como funcion anonima
// No es necesario colocarle nombre a la funcion pues la misma se invoca desde el setTimeOut y cuando lo haga tomara el nombre del parametro formal.

// Reescribimos la funcion para demostrar que setTimeout es no bloqueante pues sigue ejecutando el codigo mientras el tiempo seteado transcurre.

console.log("Inicio");

setTimeout(function () {
  console.log("Pasaron 5 segundos.");
}, 5000);

console.log("Fin");
