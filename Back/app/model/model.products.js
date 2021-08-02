const sequelize = require('sequelize')
const Productos = require('../../db/db.modelo.productos')


//si existe

module.exports.productExists = async (id)=>{

}


//Exportar nuestros modulos a utilizar
module.exports.getAllProducts = async ()=> { //trae mientras esten activos
    let resultado =  await Productos.findAll({
        where: {
        activo: 1
        }
    })
   // console.log("All Products:", JSON.stringify(resultado, null, 2)); 
    return resultado;
}

//"elimina" update, cambia valor de atributo activo a 0
module.exports.deleteProduct = async (id)=> { //trae mientras esten activos
    let resultado =  await Productos.update({
        activo: 0
       }, {
        where: { id_producto: id }
       })

       if(resultado == 1){
        resultado = await Productos.findOne({ where: {id_producto: id} })
       }
   // console.log("All Products:", JSON.stringify(resultado, null, 2)); 
    return resultado;
}
//crea producto
module.exports.createProduct = async (product)=> { //trae mientras esten activos

    try{
        let resultado = await Productos.create({nombre:product.nombre, precio:product.precio,descripcion:product.desc,imagen:product.img,calificacion:product.cali,marca:product.marca,origen:'local',activo:1})
        return resultado;

    }catch(err){
        console.log(err)
        throw new Error (err+ 'problema en modelos de productos')
    }
}

//actualiza producto
module.exports.updateProduct = async (product)=> { //trae mientras esten activos

    try{
        let resultado = Productos.update({
            nombre: product.nombre,
            precio: product.precio,
            descripcion:product.desc,
            imagen: product.img,
            calificacion:product.cali,
            marca: product.marca,
            origen: 'local',
            activo: 1,
        }, {
            where: {
                id_producto: product.id,
            }
        })
        return resultado;

    }catch(err){
        console.log(err)
        throw new Error (err+ 'problema en modelos de productos')
    }
}