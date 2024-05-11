// Para importar funciones que estan exportadas de a una en el modulo
// Importo la funcion sumar de otro archivo js
// Y trabajo al index.js como un modulo (lo aclaro en el html)
// import { sumar, restar } from "./matematicas.js";

// En caso de que exista conflicto con otra funcion del scrip puedo renombrar los metodos
// import { sumar as pepe, restar as pepa} from "./matematicas.js";
// console.log(pepa(6, 9));

// Para importar una funcion por default (dividir) y dos exportadas de a una
// import dividir, { sumar, restar } from "./matematicas.js";

// Para importar en caso de que todas las funciones esten exportadas por default
import matematica from "./matematicas.js";

// console.log(matematica.sumar(6, 9));
// console.log(matematica.restar(6, 9));
// console.log(matematica.dividir(6, 9));

// Otra forma mas prolija

const {sumar, restar, dividir, multiplicar} = matematica;

console.log(sumar(6, 9));
console.log(restar(6, 9));
console.log(dividir(6, 9));