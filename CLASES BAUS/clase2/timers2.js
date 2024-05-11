// Repaso puntero a funcion
/*
function miFuncion(){
  console.log("Hola");
}

var pepe = miFuncion;

miFuncion(); // Ejecuto lo que se encuentra en la direccion de memoria de la funcion miFuncion
pepe(); // Ejecuto "como funcion" lo que se encuentra en la direccion de memoria guardada en la variable pepe osea el cuerpo de miFuncion

nombre de una funcion miFuncion --> Direccion de memoria donde se aloja el cuerpo de la funcion
nombre de un array vec2 --> Direccion de memoria donde se aloja el primer elemento del array.


// En el caso de que pepe sea un literal de texto o string u otro tipo de dato, se arroja un error pues no puede ejecutarse como funcion.
/*
var pepe = 12;
pepe();

 --> Arroja error
*/

// El interprete de js realiza dos pasos
// 1er: Hoisting: Hace un primer barrido del script y reserva los lugares necesrios para las variables que encuentra
// es decir, declara las variables.
// var despedir;
// 2do: Ejecuta el script linea a linea.

saludar();
despedir();

// Funcion declarada
function saludar(){
  console.log("Hola mundo");
}

// Funcion expresada

var despedir = function(){
  console.log("Chau mundo");
}

// Durante el hoisting se declaro  saludar y como es una funcion declarada se le asigno el cuerpo
// Se declara la variable despedir pero al ser una funcion expresada, no se le asigna el contenido, por lo que resulta undefined al ejecutar el codigo.

// El problema de var es que va al scope general de window y la puedo "pisar" siempre lo que puede traer inconvenientes al importar una biblioteca y yo sin querer utilice un var con un nombre ya asignado.
/*
var aaa = 23;
var aaa = "ASD";
Esto con var es valido pero en otros lenguajes de programacion ni compilaria
*/

// En js se debe usar let y const
// El uso de let asemeja a la declaracion de variables en todos los demas lenguajes de programacion (no me va a dejar redefinirla)
/*
let bbb = 23;
let bbb = 0;
Esto en js no me deja hacerlo (similar a como venimos trabajando)
*/

// Cuando en una variable voy a guardar una direccion de memoria (puede ser un array o una funcion) uso const
// Uno de los motivos es que yo no puedo reasginar un valor a una variable constante ya asignada anteriormente, esto me permite no perder la direccion de memoria original

const vec = [1, 2, 3, 4, 5];
const vec2 = [];

console.log(vec);
console.log(vec2);

vec2.push(29);

console.log(vec);
console.log(vec2);

const vec3 = [...vec]; // ... Operador de propagacion, me copia el valor del array vec en vec3 pero fisicamente me genera otro array con una direccion de memoria distinta a vec
