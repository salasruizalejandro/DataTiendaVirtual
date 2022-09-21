import { clientServices } from "../servicios/clientes-servicios.js"; 

const formulario = document.querySelector("[data-form]");



formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombreProducto = document.querySelector("[data-nombreProducto]").value;
    const precio = document.querySelector("[data-precio]").value;
    const comentarios = document.querySelector("[data-comentario]").value;


    clientServices.crearCliente(url, categoria, nombreProducto, precio, comentarios).then( respuesta => {
        window.location.href = "/addProductos.html"
        console.log(respuesta)
    }).catch(err => console.log(err))
});