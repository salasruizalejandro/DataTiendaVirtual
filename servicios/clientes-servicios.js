
//fetch API
//cargar informacion de json OBTENER
const listaClientes = () => fetch("http://localhost:3000/productos").then( respuesta => respuesta.json());
// exportar la funcion listaClientes,


//crear client 
const crearCliente = (url, categoria, nombreProducto, precio, comentarios) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, categoria, nombreProducto, precio, comentarios})
    })
}


export const clientServices = {
    listaClientes,
    crearCliente,
}

