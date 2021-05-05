function envioFormulario (){
    let datos = new Object ();
    let nombre = document.getElementById ("nombre").value;
    let apellido = document.getElementById ("apellido").value;
    let apellidop = document.getElementById ("apellido-p").value;
    let email = document.getElementById ("email").value;
    let telefono = document.getElementById ("telefono").value;
    let direccion = document.getElementById ("direccion").value;
    
    datos ['nombre'] = nombre;
    datos ['apellido'] = apellido;
    datos ['apellidop'] = apellidop;
    datos ['email'] = email;
    datos ['telefono'] = telefono;
    datos ['direccion'] = direccion;
    let valida = validaCampos(datos);
    if(valida!="error"){
        alert ("Los datos se han enviado exitosamente");
        document.getElementById ("nombre").value = "";
        document.getElementById ("apellido-p").value ="";
        document.getElementById ("apellido").value = "";
        document.getElementById ("email").value ="";
        document.getElementById ("telefono").value= "";
        document.getElementById ("direccion").value="";
    }
    console.log (valida);

}
                    //se llama al objeto para hacer las validaciones
function validaCampos(datos){
    let nombre = document.getElementById ("nombre");
    let apellido = document.getElementById ("apellido");
    let apellidop = document.getElementById ("apellido-p");
    let email = document.getElementById ("email");
    let telefono = document.getElementById ("telefono");
    let direccion = document.getElementById ("direccion");

    if (datos.nombre=="" || datos.apellido==""|| datos.apellidop==""|| datos.email==""||datos.telefono==""|| datos-direccion==""){
        alert ("Todos los campos son requeridos");


    }else {
        if(datos.nombre.length<4){
            let error1 = document.getElementById("error1");
            error1.classList.remove ("invisible");
            nombre.classList.add ("aviso");
            error1.innerHTML = "El nombre debe contener más de cuatro caracteres"
            return "error";


        }else{
            error1.classList.add ("invisible");
            nombre.classList.remove ("aviso");
            }

        if(datos.apellido.length<4){
            let error1 = document.getElementById("error1");
            error1.classList.remove ("invisible");
            apellido.classList.add ("aviso");
            error1.innerHTML = "El apellido materno debe contener más de cuatro caracteres"
            return "error";
        }else{
            error1.classList.add ("invisible");
            apellido.classList.remove ("aviso");
            }

            if(datos.apellidop.length<4){
                let error1 = document.getElementById("error1");
                error1.classList.remove ("invisible");
                apellidop.classList.add ("aviso");
                error1.innerHTML = "El apellido paterno debe contener más de cuatro caracteres"
                return "error";
            }else{
                error1.classList.add ("invisible");
                apellidop.classList.remove ("aviso");
                }

            if(datos.direccion.length<4){
                let error1 = document.getElementById("error1");
                error1.classList.remove ("invisible");
                direccion.classList.add ("aviso");
                error1.innerHTML = "La dirección debe contener más de cuatro caracteres"
                return "error";
            }else{
                error1.classList.add ("invisible");
                direccion.classList.remove ("aviso");
                }
            let reg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            if(!reg.test(datos.email)){
                
                let error1= document.getElementById("error1");
                error1.classList.remove ("invisible");
                email.classList.add ("aviso");
                error1.innerHTML = "El email es incorrecto";
                return "error";
            }else{
                error1.classList.add ("invisible");
                email.classList.remove ("aviso");
            }

            if(datos.telefono.length<9){
                let error1 = document.getElementById("error1");
                error1.classList.remove ("invisible");
                telefono.classList.add ("aviso");
                error1.innerHTML = "El teléfono debe contener al menos nueve números"
                return "error";
            }else{
                error1.classList.add ("invisible");
                telefono.classList.remove ("aviso");
                }









    }

        
}   
