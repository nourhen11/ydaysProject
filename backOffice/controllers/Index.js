const User = require('../models/User')
const Product = require('../models/Product')
const Category = require('../models/Category')
const Provider = require('../models/Provider')


const register = (req,res,next) =>{
  const user=  { firstname, lastname, email, password,image } = req.body;
    user.save(function(err) {
        if (err) { 
            res.status(500).send("Error registering new user please try again.");
        } else {
            res.status(200).send("Welcome to the club!");
        }
    })
}
const login = (req,res,next) => {
  res.send('helo')
}
const addFile =(req, res, next) => {
    const file = req.file;
    console.log(file.filename);
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file.filename);
  }

const addFiles = (req, res, next) => {
    const files = req.files;
    const images = []
    console.log(files);
    if (!files) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }

    files.forEach(function(file){
      images.push(file.filename);
    });
   return  res.status(200).send(images)
  }

const getProducts = (req,res,next) => {
  Product.find().populate({ path: 'category', select: 'name' }).exec((err,result) => {
    res.status(200).send(result)
  })
}
const getProductById = (req,res,next) => {
  Product.findOne({_id:req.params.id}).populate({ path: 'category', select: 'name' }).populate({ path: 'subcategory', select: 'name' }).exec((err,result) => {
    res.status(200).send(result)
  })
}

const getCategories = (req,res,next) => {
  Category.find().select('name').exec((err,result) => {
    res.status(200).send(result)
  })
}
const getProviders = (req,res,next) => {
  Provider.find().select('company').exec((err,result) => {
    res.status(200).send(result)
  })
}
module.exports = {
    login,
    register,
    addFile,
    addFiles,
    getProducts,
    getProductById,
    getCategories,
    getProviders

} 