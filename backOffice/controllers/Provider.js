const Provider = require('../models/Provider')

const Test = (req,res,next) => {
    res.send("hello")
}

const addProvider = (req,res,next) => {
    let provider= {company,siret,address,firstname,lastname,phone,email,password} = req.body
    Provider.create(provider,(err,result) =>{
        if(err){  res.status(500).send(err)}
       return  res.status(200).json({message:"succefly added"})
    })
}

const addProduct = (req,res,next) => {
   
    let product= {
        title : req.body.title,
        price : req.body.price,
        quantity : req.body.quantity,
        description : req.body.description,
        provider : req.body.provider,
        category : req.body.category,
        subcategory : req.body.subcategory,
        colors : req.body.colors
    }
    Provider.create(provider,(err,result) =>{
        if(err){  res.status(500).send(err)}
       return  res.status(200).json({message:"succefly added"})
    })
}
module.exports = {
    Test,
    addProvider,
    addProduct,
}