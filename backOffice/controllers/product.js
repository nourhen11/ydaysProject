const db = require ('../models/index');
const Product = require('../models/produit')(db.sequelize, db.Sequelize.DataTypes);


exports.test = (req, res, next) => {
   
  //  
    Product.findAll()
  .then(results => {
      res.json(results)
      })
      .catch(err =>{
          console.log(err)
      })
};
