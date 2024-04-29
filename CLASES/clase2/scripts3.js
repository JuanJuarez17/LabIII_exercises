// let boton;

// window.addEventListener("load", function () {
//   (boton = document.getElementById("btnSaludo")),
//     boton.addEventListener("click", function () {
//       alert("Hola mundo");
//     });
// });

// Refactorizado

window.addEventListener("load", function () {
  document.getElementById("btnSaludo").addEventListener("click", function () {
    alert("Hola mundo");
  });
});

// Del objeto window uso el metodo addEventListener, cuando se cumpla el evento load (haya terminado de cargar el html) se ejecutara la funcion alert cuando se produzca el evento click del elemento id btnSaludo del index.htlm