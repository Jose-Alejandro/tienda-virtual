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