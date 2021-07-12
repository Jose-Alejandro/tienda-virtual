//importamos modulos a utilizar 
//modulos Nodejs
const { Console } = require('console');
const server = require('http');
const fetch = require('node-fetch');
require('dotenv').config();

//modulos propios

//crea funciion de request
async function request (req,res){
    //devuelev un html con imagen, la frase y un titulo que se colocara
   // res.writeHead(200, {'content-type': 'text/html'});
   // res.write(resultado);
   //res.end();
   const resp = await fetch("https://api.mercadolibre.com/trends/MLA/MLA1648"); //promesa en espera por si no finaliza devuelev vacio
   const data = await resp.json(); //promesa en espera
 
    res.writeHead(200, {'Content-Type': 'application/json'}); 
    res.write(JSON.stringify(data));
    
    res.end();
}

//instanciar y crear levantar nuestro server
const servidor = server.createServer(request);
servidor.listen(process.env.PORT, process.env.HOST,()=>{
    console.log(`Servidor inicaido en http://${process.env.HOST}:${process.env.PORT}`);
}); //pasamos variables de entorno
