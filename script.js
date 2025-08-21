function validarFormulario(){
    let nombre=document.getElementById("nombre").value;
    let email=document.getElementById("email").value;
    let imagen=document.getElementById("imagen").value;
    if(nombre=="" || email=="" || imagen=="" ){
        alert("Todos los cambios son obligatorios");
        return false;
    }
        return true;
}
function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjetURL(event.target.file[0]);
}