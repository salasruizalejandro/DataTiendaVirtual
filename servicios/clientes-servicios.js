
//fetch API
const listaClientes = () => fetch("http://localhost:3000/productos").then( respuesta => respuesta.json());
// exportar la funcion listaClientes,
export const clientServices = {
    listaClientes,
}

