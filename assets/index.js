let resultado;

async function getMercado(){ //funcion conecta con tendecias mercado libre
    const resp = await fetch("https://api.mercadolibre.com/trends/MX/MLA1648") //promesa en espera por si no finaliza devuelev vacio
    const data = await resp.json()  //promesa en espera
    return data
}   

async function getKeywordsMerc(){//busca productos con la palabra clave
     resultado = await getMercado() //palabras claves
     for (var i in resultado) {
        getProductos(resultado[i].keyword)
    }
}
// irmpime solo las palabras claves sin el enlace
/*
function imprimePalabrasclaves(json){
    for (var i in json) {
        console.log(json[i].keyword)
    }
}*/

// funcion que  usa la palabras claves para busquar y traer productos
async function getListWord(word){
        const resp = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${word}`) //promesa en espera por si no finaliza devuelev vacio
        const data = await resp.json()  //promesa en espera
        return data 
}

async function getProductos(word){//trae productos por palabra clave
    resultado = await getListWord(word) //palabras claves
    console.log(resultado);
}

getKeywordsMerc();