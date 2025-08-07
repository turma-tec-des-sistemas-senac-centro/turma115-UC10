const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../../database/configDB');
const Expositor = require('../../expositor/models/expositorModel');

const Prototipo = sequelize.define('Prototipo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expositorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'expositores',
      key: 'id',
    },
  }
}, {
  tableName: 'prototipos',
  createdAt: "criado_em",
  updatedAt: "atualizado_em",
  indexes: [
    {
      unique: true,
      fields: ['titulo', 'expositorId']
    }
  ]
});

Prototipo.belongsTo(Expositor, { foreignKey: 'expositorId' });
Expositor.hasMany(Prototipo, { foreignKey: 'expositorId' });

module.exports = Prototipo;


