class Store {
  constructor() {}

  createTrendElement(product) {
    let productContainer = document.getElementById("product-container");
    
    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("featurette");
    
    let divider = document.createElement("hr");
    divider.classList.add("featurette-divider");
    
    let headerDiv = document.createElement("div");
    headerDiv.classList.add("col-md-7");
    
    let productHeader = document.createElement("h2");
    productHeader.classList.add("featurette-heading");
    productHeader.textContent = product.title;
    
    let itemPrice = document.createElement('p');
    itemPrice.classList.add('lead');
    itemPrice.textContent = '$'+product.price;
    
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("col-md-5");
    
    let itemImage = document.createElement("img");
    itemImage.setAttribute("src", product.thumbnail);
    itemImage.style.width = "300px";
    itemImage.style.height = "300px";

    let addButton= document.createElement("button");
    addButton.classList.add("btn");
    addButton.classList.add("btn-primary");
    addButton.textContent='Add to cart';

    productContainer.appendChild(divider);
    productContainer.appendChild(row);
    row.appendChild(headerDiv);
    headerDiv.appendChild(productHeader);
    headerDiv.appendChild(itemPrice);
    row.appendChild(imageContainer);
    imageContainer.appendChild(itemImage);
    imageContainer.appendChild(addButton);
  }
  // funcion que usa la palabras claves para busquar y traer productos
  async getProductsFromKeyword(word) {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${word}`
    );
    const products = await response.json(); //promesa en espera
    return products;
  }

  //trae productos por palabra clave
  async getTrendProducts(keyword) {
    this.CategoryProducts = await this.getProductsFromKeyword(keyword); //palabras claves
    for (let i = 0; i < 3; i++) {
      //
      let product = this.CategoryProducts.results[i];
      this.createTrendElement(product);
    }
  }

  //tendecias mercado libre
  async getTrendCategory() {
    const resp = await fetch("https://api.mercadolibre.com/trends/MX/MLA1648"); //promesa en espera por si no finaliza devuelev vacio
    const data = await resp.json(); //promesa en espera
    return data;
  }

  async getTrendKeywords() {
    this.CategoryProducts = await this.getTrendCategory(); //palabras claves

    for (let i = 0 /*in this.CategoryProducts*/; i < 5; i++) {
      this.getTrendProducts(this.CategoryProducts[i].keyword);
    }
  }

  static start() {
    let myStore = new Store();
    myStore.getTrendKeywords();
  }
}
Store.start();
