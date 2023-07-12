bootstrap.Tab.getInstance(triggerEl).show()
import Swal from 'sweetalert2/dist/sweetalert2.js'
var triggerEl = document.querySelector('#navId a')
triggerEl.addEventListener('click', function(e) {
    e.preventDefault()
        Swal.fire
        ({
        title: '¿Estás seguro?'
        })
    })
    //validar campos
function validaCampos(){
var contadorErrores=0;
if(document.getElementById('nombre').value == ""){
alert("Ingresa el Nombre");
contadorErrores++
}
if(document.getElementById('email').value == ""){
alert("ingresa el campo email");
contadorErrores++;

}
if(document.getElementById('mensaje').value == ""){
alert("Ingrese un Mensaje o comentario");
contadorErrores++;

}
if(document.getElementById('form-check-input').value == ""){
alert("Debes Aceptar los términos y Condiciones");
contadorErrores++;

}

/* inicio de sweet alert*/

if(contadorErrores==0){
    //alert("TU INFORMACION FUE ENVIADA EXITOSAMENTE "+contadorErrores)
    Swal.fire({
        icon: 'success',
        title: 'Reserva exitosa',
        text: "Tu reserva fue enviada exitosamente"
    })
}else {
   //alert("DEBES RELLENAR LOS CAMPOS OBLIGATORIOS")
   Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: mensaje
    })
}

/**fin de sweet alert*/

}
/** inicio validaciones **/
function obtenerDatos(){
    $.ajax(
        {
            url:'https://64a3599fb45881cc0ae64eba.mockapi.io/Bebidas',
            dataType:'json',
            success:function(dato){
                console.log(dato);
                var contenedorBebidas=$('#bebida-content')
                var elementos=''
                for(var indice in dato)
                {
                    console.log(dato[indice].nomArticulo)
                    var elemento=
                    '<div class="col-md-4">'+
                    '<div class="row border">'+
                            '<div class="col">'+
                                '<img src="'+datos[indice].imagen+'" class="card-img-top" alt="...">'+
                            '</div>'+
                            '<div class="col">'+
                                '<p>'+datos[indice].nomArticulo+
                                '<p>'+datos[indice].descArticulo+'</p>'+
                                '<p>$'+datos[indice].preArticulo+'</p>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                    elementos+=elemento
                }
                var row = '<div class="row p-1">'+elementos+'</div>'
                contenedorBebidas.append(row)
            }
        
        }
    )
}                   
/** fin validaciones**/