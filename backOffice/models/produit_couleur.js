/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produit_couleur', {
    id_couleur: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'couleur',
        key: 'id_couleur'
      }
    },
    id_produit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'produit',
        key: 'id_produit'
      }
    }
  }, {
    tableName: 'produit_couleur'
  });
};
