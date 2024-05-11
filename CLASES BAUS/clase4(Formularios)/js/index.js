// Como manejar el evento submit del formulario para mantenernos en el concepto de Single Page Aplicattion

const formulario = document.forms[0]; // Obtener referencia a un formulario, en este caso me traera un array de formularios, pero como se que tengo uno solo, me interesa el primero osea el del indice 0

formulario.addEventListener("submit", (e) => {
  //Un manejador de eventos siempre capturara un evento (e)
  // Para saber quien fue el que disparo el evento
  //e.target; //e.target es el formulario

  e.preventDefault(); // Con preventDefault no se realiza el comportamiento por defercto, en este caso el envio de datos por ser un formulario
  console.log("Hola");
});
// addEventListener --> Manejador de eventos
// Con el script de arriba hacemos que no se envien los datos cargados en el index.html y nos mantenemos en dicha pagina --> Concepto de SPA

// document.getElementById("txtNombre").addEventListener("keydown", (e) => {
//   e.preventDefault();
//   console.log(e);
// });
// keydown --> Evento que se lanza cuando queremos tipear dentro de una caja de texto
// Con el script de arriba capturo el evento de tipear en una caja de texto y desactivo su comportamiento por defecto, que es que se imprima el texto en la caja
