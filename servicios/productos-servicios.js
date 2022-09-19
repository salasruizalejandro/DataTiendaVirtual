
//Primer servicio para mostrar las imagenes dentro de html
const listaProductos = () => fetch("http://localhost:3000/productos").then(respuesta=> respuesta.json());

console.log(listaProductos())
//exportamos para poder hacer la etapa del Crud.

export const productosServicios = { 
    listaProductos,
}