
console.log('Hola mundo desde el servidor pero lo enviamos al front')
//eventos para vista productosCrud.ejs /borones CRUD PRODUCTOS

//peticion a endpoint vista (read crud) /mustra productos DB
const traerP = document.getElementById('traerP')
traerP.addEventListener('click', async ()=> {
    location.reload();
})

async function eliminaProdDB(id_prod){
    var opcion = confirm("Desea eliminar el producto");
    if (opcion == true) {
        let resultado = await fetch(`http://127.0.0.1:3000/products/${id_prod}`,{method: 'put'})
        console.log('se elimino producto');
        console.log(resultado)
	} else {
        console.log('se cancelo la eliminacion');
	}
    location.reload()
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


