function handlerClick(){
    alert("Hola mundo");
}

// Funcion --> Funcion comun y corriente
// Metodo --> Funcion dentro de un objeto

// El objeto document es nuestra pagina web en memoria

const boton = document.getElementById("btnSaludo"); 
// Guardo en una variable "boton" la direccion de memoria de memoria de mi boton cuyo id btnSaludo del index.html

boton.addEventListener("click", handlerClick)
// Al obejto boton le asocio el evendo addEventListener y como segundo parametro le paso la direccion de memoria (puntero a funcion) de la funcion handlerCLick

// Tengo la direccion de memoria de un boton de html, le asigno un manejador de eventos
// Cuando el objeto bntSaludo lance el evento click, ejecuto el evento handlerClick




