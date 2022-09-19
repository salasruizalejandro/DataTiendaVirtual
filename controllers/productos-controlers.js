import {listaProductos, productosServicios} from "../servicios/productos-servicios.js"

const nuevoProducto =(nombreProducto,precio,imagenUrl)=>{
    const card = document.createElement("div")
    const contenido = `
    <div>
        <img class="ImgProducSc" src="${imagenUrl}" alt="Productos">
        <h4 class="producto">${nombreProducto}</h4>
        <h5 class="valor">${precio}</h5>
        <a class="verProducto" href="">ver producto</a>
    </div>
    `;  
        
    card.innerHTML= contenido;
    card.classList.add("card");
    return card;
}

const productos = document.querySelector("[data-producto]")

const render = async () => {
    try{
        const listaProductos = await productosServicios.listaProductos()
        listaProductos.forEach(elemento => {
        productos.appendChild(nuevoProducto(elemento.nombreProducto, elemento.precio, elemento.imagenUrl))    
        });
    }catch(erro){
        console.log(erro);
    }
} 

render()

