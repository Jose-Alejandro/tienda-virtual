
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



