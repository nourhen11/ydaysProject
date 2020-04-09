const db = require ('../models/index');
const Product = require('../models/user')(db.sequelize, db.Sequelize.DataTypes);
    exports.getproducts = (req, res, next) => {
        Product.findAll()
        .then(results => {
            res.json(results)
         })
        .catch(err =>{
           console.log(err)
         })
};
exports.getProductById = (req, res, next) => {
    Product.findByPk(req.params.id)
    .then(results => {
        res.json(results)
        })
        .catch(err =>{
            console.log(err)
        })
   };