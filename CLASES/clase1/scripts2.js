const boton = document.getElementById("btnSaludo"); 

boton.addEventListener("click", function (){alert("Hola mundo");})

// Parametro formal --> El nombre del parametro en la firma del a funcion
// Parametro actual --> El parametro que se pasa a la funcion cuando es invocada

// Paso como segundo parametro del evento addEventListener una funcion
// La misma no necesita nombre pues solo se va a invocar cuando sea llamada por el evento addEventListener y en ningun otro lugar del codigo
// A este concepto se lo conoce como funcion anonima o lambda

// TODO ESTO FUNCIONA SI EL BOTON SE CREA ANTES DE QUE SE EJECUTE LA ETIQUETA SCRIPT EN EL HTML, PARA CUANDO NO SUCEDE ESTO VER scripts3



