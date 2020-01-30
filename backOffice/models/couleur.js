/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('couleur', {
    id_couleur: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'couleur'
  });
};
