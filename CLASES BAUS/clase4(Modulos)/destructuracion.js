// Destructuracion de un objeto
const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
};

// let nombre = persona.nombre;
// let apellido = persona.apellido;
// let edad = persona.edad;

// Esto se puede reemplazar por

// Desestructuracion de objetos
let { nombre, apellido, edad } = persona;

// No importa el orden en el que cree las variables, tiene que coincidir los nombres
// let{nombre, edad, apellido} = persona;

// Puedo traer las variables que necesite
// let{nombre, apellido} = persona;

// Si traigo una variable que el objeto no posee, queda como undefined
// let{nombre, apellido, email} = persona;

console.log(nombre, apellido, edad);

// Destructuracion de un vector

const lista = [23, 45, 57, 87, 93];

// let a = lista[0];
// let b = lista[1];
// let c = lista[2];

// Usando destructuracion

let [a, b, c] = lista;
// a va a guardar la pos 0, b la pos 1 y c la 2

// let[a, c, b] = lista;
// a va a guardar la pos 0, c la pos 1 y b la 2

// let[a, b, ...c] = lista;
// a va a guardar la pos 0, b la pos 1 y todas las posiciones restantes se guardan en un nuevo array c

console.log(a, b, c);
