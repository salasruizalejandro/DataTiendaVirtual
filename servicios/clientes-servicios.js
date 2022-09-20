
// 5.Creacion nuevo producto

const crearNuevaLinea = (imagenUrl, nombreProducto, precio) =>{
    const linea = document.createElement("div");
    const content =`
    <img class="ImgProducSc" src="${imagenUrl}" alt="Productos">
    <h4 class="producto">${nombreProducto}</h4>
    <h5 class="valor">${precio}</h5>
    <a class="verProducto" href="">ver producto</a>
    `;
    linea.innerHTML = content
    linea.classList.add("containerImgProductos")
    return linea;
}

// 6. Recorrer todo el arbol del Dom y llevarnos al elemento data-producto

const tabla = document.querySelector("[data-producto]")



const listaClientes = () => {
    const promise = new Promise ((resolve, reject) =>{
        //1. Creacion de const http
        const http = new XMLHttpRequest();
        // 2. Creacion de conexion con Json
        http.open("GET", "http://localhost:3000/productos");
        // 3. funcion de enviar datos
        http.send();
        // 4. Recargar datos en consola Cliente Servidor
        http.onload = () =>{
            const response = JSON.parse(http.response);
            if(http.status >= 400){
                reject(response)
            }else{
                resolve(response)
            }
        }
    })
    return promise
}

listaClientes().then((data) =>{
    data.forEach( perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.imagenUrl, perfil.nombreProducto, perfil.precio)
        tabla.appendChild(nuevaLinea)        
    });
}).catch((error)=> alert("Ocurrio un error"))