// Codigo para mostrar el dialog desde un botton del html
// Trae el elemento con el id especificado en el metodo
document.getElementById("btnOpen").addEventListener("click", () => {
    
    // Trae todos los elementos cuya etiqueta sea dialog en un array, como es este caso sabemos que tenemos uno solo, lo cargamos en el indice 0 del array.
    // En el caso de que haya mas de un elemento con dicha etiqueta, se cargaran en el array (sus direcciones de memoria) en el orden que aparezcan en el script del html
    document.getElementsByTagName("dialog")[0].open = true
})

// Otra forma de escribir el metodo anterior

// document.getElementById("btnOpen").onclick = ()=> {document.getElementsByTagName("dialog")[0].open = true}


// Codigo para cerrar el dialog desde un botton del html
document.getElementById("btnClose").addEventListener("click", () => {

    // Forma 1
    // document.getElementsByTagName("dialog")[0].open = false
    
    // Forma 2
    document.getElementsByTagName("dialog")[0].removeAttribute("open")
})

