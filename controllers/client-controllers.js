import { clientServices } from "../servicios/clientes-servicios.js"

console.log(clientServices)

// Creacion nuevo producto
const crearNuevaLinea = (imagenUrl, nombreProducto, precio, id) =>{
    const linea = document.createElement("div");
    const content =`
    <img class="ImgProducSc" src="${imagenUrl}" alt="Productos">
    <h4 class="producto">${nombreProducto}</h4>
    <h5 class="valor">${precio}</h5>
    <a class="verProducto" href="">ver producto</a>
    <a data-eliminar class="verProducto" id="${id}" >Eliminar</a>
    <a class="verProducto" href="">Editar</a>
    `;
    linea.innerHTML = content
    linea.classList.add("containerImgProductos")

    // const para eliminar por medio de a
    const btn =linea.querySelector("[data-eliminar]")
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.id;
        clientServices.eliminarClientes(id).then( respuesta => {
            console.log(respuesta)
        }).catch(err => alert("ocurrio un error"))
    });
    return linea;
}
        


// 6. Recorrer todo el arbol del Dom y llevarnos al elemento data-producto
const tabla = document.querySelector("[data-producto]")


clientServices.listaClientes().then((data) =>{
    data.forEach( ({imagenUrl, nombreProducto, precio, id}) => {
        const nuevaLinea = crearNuevaLinea(imagenUrl, nombreProducto, precio, id)
        tabla.appendChild(nuevaLinea)        
    });
}).catch((error)=> alert("Ocurrio un error"))

