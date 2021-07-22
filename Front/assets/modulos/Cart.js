/*

class Cart(user) {
    constructor() {
        let total = 0;
    }

    AddProduct(product) {
        this.products.push(product);
    };

    RemoveProduct(id) {
        this.products.remove(id);
    };

    Buy() {
        checkCreditCard();
        applyCoupon();
        pay();
    };

    getTotal() {};
    applyCoupon() {};
    checkCreditCard() {};
    pay() {};
}

class Productos() {
    constructor() {
        this.id = 0;
        this.name = ''
        this.quantity = 0;
        this.price = 0;
        this.thumnail = 0;
        this.description = '';
    };
    CreateProduct() {
        storeToDB(this);
    };
    UpdateProduct(id, product) {
        UpdateToDB(id, product);
    };

    DeleteProduct() {
        deleteFromDB(this.id);
    };
    RetrieveProduct() {
        retrieveDB(this.id);
    };
}

*/

/*
let car = new Carrito(1);
let contador = 0;*/



class Cart {
    constructor(clave) {
        this.clave = clave;
        this.productos = this.obtener();
        this.ML_ENDPOINT= 'product';
       
        
    }
    agregar(producto) {
            this.productos.push(producto);
            localStorage.setItem(this.clave,JSON.stringify( this.productos));
    }
  /*  quitar(id) {
        const indice = this.productos.findIndex(p => p.id === id);
        if (indice != -1) {
            this.productos.splice(indice, 1);
            this.guardar();
        }
    }*/
    obtener() {
        if ( this.clave in localStorage){
            return JSON.parse(localStorage.getItem(this.clave))
        }else
        return [];
        
    }

    /*existe(id) {
        return this.productos.find(producto => producto.id === id);
    }*/

    obtenerConteo() {
        return this.productos.length;
    }
    
    limpiar() {
        this.productos=[];
         localStorage.clear();
         let listProducts = document.getElementById("listProducts");
         listProducts.innerHTML = '';
         let contCar = document.getElementById("contCar");
         contCar.textContent = 0;
         let totalCar = document.getElementById("totalCar");
         totalCar.textContent = 0;
    }

    async mostrarProductos(){
        let total=0;
        for (const i in  this.productos) {
                try {
                    const response = await fetch(`http://127.0.0.1:3000/${this.ML_ENDPOINT}?q=${this.productos[i]}`);
                    const item = await response.json(); //promesa en espera
                    console.log(item);
                    total+= item.price;
                    this.createElementProduct(item);
                } catch (error) {
                    throw new Error(error);
                }
          }
          let totalCar = document.getElementById("totalCar");
          totalCar.textContent = Intl.NumberFormat('en-EN', { style: "currency", currency: "MXN", }).format(total);
    }

    createElementProduct(item){
        let listProducts = document.getElementById("listProducts");
        let contCar = document.getElementById("contCar");
        contCar.textContent = this.obtenerConteo();

        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.classList.add("d-flex");
        li.classList.add("justify-content-between");
        li.classList.add("lh-sm");

        let div = document.createElement("div");

        let h6 = document.createElement("h6");
        h6.classList.add("my-0");
        h6.textContent = item.title;

        let itemImage = document.createElement("img");
        itemImage.setAttribute("src", item.thumbnail);
        itemImage.style.width = "100px";
        itemImage.style.height = "100px";

        let span = document.createElement("span");
        span.classList.add("text-muted");
        span.textContent = Intl.NumberFormat('en-EN', { style: "currency", currency: "MXN", }).format(item.price);

        listProducts.appendChild(li);
        li.appendChild(div);
        div.appendChild(h6);
        div.appendChild(itemImage);
        li.appendChild(span);
    }
}

let limp = document.getElementById('limp')
let Carrito = new Cart('Productos');

function clickAdd(prod){
    Carrito.agregar(prod);
    console.log(Carrito.productos);
}

function cargarPorductos(){
    Carrito.mostrarProductos(); 
}

function clearCar(){
    Carrito.limpiar();
    console.log('limpia')
}




