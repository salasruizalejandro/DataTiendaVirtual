let correo = document.querySelector('#inputNombre');
let contraseña = document.querySelector("#inputContraseña");
let entrarSeccion = document.querySelector("#enviarMensajeLogin");

entrarSeccion.addEventListener('click', function(evento){
    evento.target
    console.log(correo.value)
    console.log(contraseña.value)
    verificarContraseña()
    
});


function verificarContraseña(){
    let sistemaCorreo = "alejo@gmail.com"
    let sistemaContraseña = "9512";
    
    if (sistemaCorreo == correo.value){
        if(sistemaContraseña == contraseña.value){
            window.location.href = 'http://127.0.0.1:5500/addProductos.html';   
        }else{
            correo.value = "";
            contraseña.value = "";
            alert("No es la contraseña correcta, trata de nuevo")
        }
    }else {
        alert("No es el correo correcto, trata de nuevo")
        correo.value = "";
        contraseña.value = "";
    }alert("No es el correo correcto, trata de nuevo")
    correo.value = "";
    contraseña.value = "";
}              


    

