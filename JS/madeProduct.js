
const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    
    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombreProducto = document.querySelector("[data-nombreProducto]").value;
    const precio = document.querySelector("[data-precio]").value;
    const comentarios = document.querySelector("[data-comentario]").value;

    console.log(url)
    console.log(categoria)
    console.log(nombreProducto)
    console.log(precio)
    console.log(comentarios)

})


