
console.log('Hola mundo desde el servidor pero lo enviamos al front')




class Usuario {
    constructor (usuario, pass) {
        this.email = usuario
        this.pass = pass
        this.token = ''
        this.role = 'admin'
    }

    static async guardaUsuario (usuario) {
        sessionStorage.setItem('dataSession', JSON.stringify(usuario))
    }

    static async recuperaUsuario () {
        let resultado = await JSON.parse(sessionStorage.getItem('dataSession'))
        return resultado
    }
}



let Sign_in = document.getElementById('Sign_in')


//Logica para trabajar
//Login
Sign_in.addEventListener('click', async ()=> {

    var formulario = document.forms['form_sign'];

    Usuario.guardaUsuario(new Usuario (formulario['email'].value,formulario['pass'].value))
    console.log('sing in')
    let data = await Usuario.recuperaUsuario()

    let resultado = await fetch('http://localhost:3000/admin/login', {
        method: 'post',
        headers: {
            "Accept": "application/json, text/plain, */*",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": data.email,
            "password" : data.pass,
            "role" : data.role
        })
    })

        
    let datosVuelta = await resultado.json()
    data.token = datosVuelta
    console.log(data)
    Usuario.guardaUsuario(data)
    
    if (resultado){
        console.log("redirecciona");
        location.href ="./adminProducts";
    }


})



