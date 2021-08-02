//importamos los modulos a utulizar
const controlProducts = require('../controler/control.products')



module.exports = (app) => {//muestra productos base de datos
    app.get('/products', async (req,res)=> {
        try{
            let resultado = await controlProducts.getAllProducts();
            console.log(resultado)
            res.render("products", {resultProd:  resultado})
        }catch (error) {
            console.log(error)
            res.status(500).jeson('Algo raro ocurrio con esta pagina')
        } 
    })
    
    //elimina producto - cambia el valor de activo a 0  //no permite patch
    app.put('/products/:id', async (req,res)=> {
        try{
            let resultado = await controlProducts.deleteProduct(req.params.id)
            console.log(resultado)
            res.send('producto eliminado')
        }catch (error) {
            console.log(error)
            res.status(500).jeson('Algo raro ocurrio con esta pagina')
        } 
    })

    //crear nuevo producto
    app.post('/products', async (req,res)=> {
        try{
           // let resultado = await controlProducts.deleteProduct(req.body.id)
           let resultado = await controlProducts.createProduct(req.body)
            res.send(resultado)
            console.log(resultado)
        }catch (error) {
            console.log(error)
            res.status(500).jeson('Algo raro ocurrio con esta pagina')
        } 
    })

     //actualizar producto
    app.post('/products/update', async (req,res)=> {
        try{
           // let resultado = await controlProducts.deleteProduct(req.body.id)
           let resultado = await controlProducts.updateProduct(req.body)
            res.send(resultado)
            console.log(resultado)
        }catch (error) {
            console.log(error)
            res.status(500).jeson('Algo raro ocurrio con esta pagina')
        } 
    })
};
