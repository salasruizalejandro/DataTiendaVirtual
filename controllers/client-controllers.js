import { clientServices } from "../servicios/clientes-servicios.js"

console.log(clientServices)

// 5.Creacion nuevo producto
const crearNuevaLinea = (imagenUrl, nombreProducto, precio) =>{
    const linea = document.createElement("div");
    const content =`
    <img class="ImgProducSc" src="${imagenUrl}" alt="Productos">
    <h4 class="producto">${nombreProducto}</h4>
    <h5 class="valor">${precio}</h5>
    <a class="verProducto" href="">ver producto</a>
    <a class="verProducto" href="">Eliminar</a>
    <a class="verProducto" href="">Editar</a>
    `;
    linea.innerHTML = content
    linea.classList.add("containerImgProductos")
    return linea;
}


// 6. Recorrer todo el arbol del Dom y llevarnos al elemento data-producto
const tabla = document.querySelector("[data-producto]")


clientServices.listaClientes().then((data) =>{
    data.forEach( perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.imagenUrl, perfil.nombreProducto, perfil.precio)
        tabla.appendChild(nuevaLinea)        
    });
}).catch((error)=> alert("Ocurrio un error"))