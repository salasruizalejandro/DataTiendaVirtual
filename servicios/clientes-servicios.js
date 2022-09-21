
//fetch API
//cargar informacion de json OBTENER
const listaClientes = () => fetch("http://localhost:3000/productos").then( respuesta => respuesta.json());
// exportar la funcion listaClientes,


//crear client 
const crearCliente = (imagenUrl, categoria, nombreProducto, precio, comentarios) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagenUrl, categoria, nombreProducto, precio, comentarios})
    })
}

const eliminarClientes = (id) => {
    console.log("eliminar " , id )
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
    })
}  


export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarClientes
}

