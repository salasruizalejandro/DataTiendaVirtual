let contadorBoton;

function verProductos(){    
    // Permite dirigir al usuario a la seccion de Producto
    contadorBoton = window.location.hash = '#Promociones';
    // Permite refrescar la host
    history.replaceState({}, null, '/');
    console.log(contadorBoton) 
}

function Pagelogin(){
    window.location.href = 'http://127.0.0.1:5500/login.html'    
}
