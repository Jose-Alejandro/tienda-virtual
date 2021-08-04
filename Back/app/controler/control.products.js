const modelProducts = require('../model/model.products')

//exportar los modulos que vamos a utilizar
module.exports.getAllProducts = async ()=> {
    try {
        const resultado = await modelProducts.getAllProducts()
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Desde el controlador paso algo')
    }
}
//elimina producto -- activo a 0
module.exports.deleteProduct = async (id)=> {
    try {
        const resultado = await modelProducts.deleteProduct(id)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Desde el controlador paso algo')
    }
}
//crea producto
module.exports.createProduct = async (product)=> {
    try {
        const resultado = await modelProducts.createProduct(product)
       
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Desde el controlador paso algo')
    }
    
}

//crea producto
module.exports.updateProduct = async (product)=> {
    try {
        const resultado = await modelProducts.updateProduct(product)
       
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Desde el controlador paso algo')
    }
    
}