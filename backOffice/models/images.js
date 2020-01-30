/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('images', {
    id_image: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    url: {
      type: DataTypes.STRING(50),
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
    tableName: 'images'
  });
};
