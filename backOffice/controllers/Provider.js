const Provider = require('../models/Provider')
const Product = require('../models/Product')
const Category = require('../models/Category')
const subcategory = require('../models/Subcategory')


const register = (req,res,next) => {
    let provider= {company,siret,address,firstname,lastname,phone,email,password} = req.body
    Provider.create(provider,(err,result) =>{
        if(err){  res.status(500).send(err)}
       return  res.status(200).json({message:"succefly added"})
    })
}

const addProduct = (req,res,next) => {
   
    let product= {
        reference : req.body.reference,
        title : req.body.title,
        price : req.body.price,
        quantity : req.body.quantity,
        description : req.body.description,
        provider : req.body.provider,
        category : req.body.category,
        subcategory : req.body.subcategory,
        color : req.body.color,
        images : req.body.images
     }
     Product.create(product,(err,result) =>{
        idproduct = result._id
        console.log(idproduct)
        if(err){  res.status(500).send(err)}
        Provider.findOneAndUpdate({_id:req.body.provider},{$push:{products:idproduct}},(err,result)=>{
         if(err){  res.status(500).send(err)}
         Category.findOneAndUpdate({_id:req.body.category},{$push:{products:idproduct}},(err,result)=>{
            if(err){  res.status(500).send(err)}
            subcategory.findOneAndUpdate({_id:req.body.subcategory},{$push:{products:idproduct}},(err,result)=>{
                if(err){  res.status(500).send(err)}
               })
               return  res.status(200).json({message:"succefly added"})
           })
        })    
    })
}
module.exports = {
 
    register,
    addProduct,
}