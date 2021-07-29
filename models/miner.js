'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Miner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Miner.belongsTo(models.User)
      Miner.belongsTo(models.Coin)
      Miner.hasMany(models.MinerLog)

    }
  };
  Miner.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    CoinId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Coins',
        key: 'id'
      }
    },
    wallet: {
      type: DataTypes.STRING,
      allowNull: false
    },
    unpaidBalance: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Miner',
  });
  return Miner;
};