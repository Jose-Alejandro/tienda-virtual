class usuario {
    constructor (Usuario, pass) {
        this.email = Usuario
        this.pass = pass
        this.token = ''
        this.role = 'user'
    }

    static async guardaUsuario (Usuario) {
        sessionStorage.setItem('dataSession', JSON.stringify(Usuario))
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

    usuario.guardaUsuario(new usuario (formulario['email'].value,formulario['pass'].value))
    console.log('sing in')
    try {
        
    let data = await usuario.recuperaUsuario()

    let resultado = await fetch('http://localhost:3000/users/login', {
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
    usuario.guardaUsuario(data)
    
    if (resultado.status === 200){
        console.log("redirecciona");
        location.href ="./index.html";
    }

    } catch (error) {
    console.log(error)
        alert('email or password incorrect')
    }

})
