/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('description-produit', {
    id_description: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    specification: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_produit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'produit',
        key: 'id_produit'
      }
    }
  }, {
    tableName: 'description-produit'
  });
};
