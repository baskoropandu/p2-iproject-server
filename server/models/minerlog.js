'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MinerLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MinerLog.belongsTo(models.Miner)
    }
  };
  MinerLog.init({
    MinerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Miners',
        key: 'id'
      }
    },
    hashrate: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'MinerLog',
  });
  return MinerLog;
};