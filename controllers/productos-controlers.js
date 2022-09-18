import {listaProductos} from "../servicios/productos-servicios.js"

const nuevoProducto =(name,price,imagenUrl)=>{
    const nuevaCard = document.createElement("div")
    const contenido = `
    <ul>
        <li>
            <img class="ImgProducSc" src="${imagenUrl}" alt="Productos">
            <h4 class="producto">${name}</h4>
            <h5 class="valor">${price}</h5>
            <a class="verProducto" href="">ver producto</a>
        </li>
    </ul>
    `;
    nuevaCard.innerHTML=contenido;
    nuevaCard.classList.add("nuevaCard");
    return nuevaCard;
}