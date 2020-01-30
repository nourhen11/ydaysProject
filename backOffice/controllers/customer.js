const db = require ('../models/index');
const Customer = require('../models/client')(db.sequelize, db.Sequelize.DataTypes);
exports.getClients = (req, res, next) => {
   
    //  
      Customer.findAll()
    .then(results => {
        res.json(results)
        })
        .catch(err =>{
            console.log(err)
        })}
;   
exports.getClient = (req, res, next) => {
         Customer.findByPk(req.params.id)
        .then(results => {
            res.json(results)
            })
            .catch(err =>{
                console.log(err)
            })
  };
  