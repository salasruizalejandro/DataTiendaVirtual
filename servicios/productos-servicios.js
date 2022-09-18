//Primer servicio para mostrar las imagenes dentro de html
const listaProductos = () => fetch("http://localhost:3000/productos").then(respuesta=> respuesta.json());

//exportamos para poder hacer la etapa del Crud.

export const productosServicios = {
    listaProductos,
}