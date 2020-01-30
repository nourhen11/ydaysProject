const db = require ('../models/index');
const Product = require('../models/produit')(db.sequelize, db.Sequelize.DataTypes);
const ProductColor = require('../models/produit_couleur')(db.sequelize, db.Sequelize.DataTypes);



exports.getProducts = (req, res, next) => {

    Product.findAll()
           .then(results => {
               res.json(results)
            })
           .catch(err =>{
              console.log(err)
            })
};


exports.getProductById = (req, res, next) => {
 // let couleurs= await ProductColor.findAll({where:{id_produit:req.params.id}})
  console.log(couleurs)
  Product.findOne({where:{id_produit : req.params.id}})
           .then(results => {
               res.json(results)
            })
           .catch(err =>{
              console.log(err)
            })
};

exports.getProductsByIdCategory = (req, res, next) => {
  Product.findAll({where:{id_categorie : req.params.id}})
           .then(results => {
               res.json(results)
            })
           .catch(err =>{
              console.log(err)
            })
};

exports.getProductsByIdProvider = (req, res, next) => {

  Product.findAll({where:{id_fournisseur : req.params.id}})
           .then(results => {
               res.json(results)
            })
           .catch(err =>{
              console.log(err)
            })
};