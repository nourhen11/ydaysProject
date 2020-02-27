const db = require ('../models/index');
const Categorie = require('../models/categorie')(db.sequelize, db.Sequelize.DataTypes);
exports.getcategories = (req, res, next) => {
    Categorie.findAll()
    .then(results => {
        res.json(results)
        })
        .catch(err =>{
            console.log(err)
        })
    };   
    exports.getcategorie = (req, res, next) => {
        Categorie.findByPk(req.params.id)
            .then(results => {
                res.json(results)
                })
                .catch(err =>{
                    console.log(err)
                })
    };