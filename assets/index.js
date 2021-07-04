function createTrendElement(item) {
    console.log(item)
    console.log(item.thumbnail)
    let container = document.getElementById('product-container')
    let row = document.createElement('div')
    row.classList.add('row')
    row.classList.add('featurette')
    let divider = document.createElement('hr');
    divider.classList.add('featurette-divider')
    let headerDiv = document.createElement('div');
    headerDiv.classList.add('col-md-7')
    let itemHeader = document.createElement('h2');
    itemHeader.classList.add('featurette-heading');
    itemHeader.textContent = item.title;
    // let itemPrice = document.createElement('p');
    // itemPrice.classList.add('lead');
    // itemPrice.textContent = item.price
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('col-md-5');
    itemImage = document.createElement('img');
    itemImage.setAttribute('src', item.thumbnail);

    itemImage.style.width = '300px'
    itemImage.style.height = '300px'
    container.appendChild(divider)
    container.appendChild(row)
    row.appendChild(headerDiv);
    headerDiv.appendChild(itemHeader);
    // headerDiv.appendChild(itemPrice);
    row.appendChild(imageContainer);
    imageContainer.appendChild(itemImage)
}


var resultado;

// imprime solo las palabras claves sin el enlace
/*
function imprimePalabrasclaves(json){
	for (var i in json) {
		console.log(json[i].keyword)
	}
}*/

// funcion que  usa la palabras claves para busquar y traer productos
async function getListWord(word) {
    const resp = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${word}`) //promesa en espera por si no finaliza devuelev vacio
    const data = await resp.json() //promesa en espera
    return data
}

//trae productos por palabra clave
async function getProductos(word) {
    resultado = await getListWord(word) //palabras claves
    for (let index = 0; index < 2; index++) {
        let element = resultado.results[index]
        createTrendElement(element)
    }
}



//funcion conecta con tendecias mercado libre
async function getMercado() {
    const resp = await fetch("https://api.mercadolibre.com/trends/MX/MLA1648") //promesa en espera por si no finaliza devuelev vacio
    const data = await resp.json() //promesa en espera
    return data
}


//busca productos con la palabra clave
async function getKeywordsMerc() {
    resultado = await getMercado() //palabras claves
    for (let i in resultado) {
        getProductos(resultado[i].keyword)
    }
}

getKeywordsMerc();