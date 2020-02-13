const db = require ('../models/index');
const Provider = require('../models/fournisseur')(db.sequelize, db.Sequelize.DataTypes);
exports.getproviders = (req, res, next) => {
      Provider.findAll()
    .then(results => {
        res.json(results)
        })
        .catch(err =>{
            console.log(err)
        })
    };   
    exports.getprovider = (req, res, next) => {
        Provider.findByPk(req.params.id)
            .then(results => {
                res.json(results)
                })
                .catch(err =>{
                    console.log(err)
                })
    };