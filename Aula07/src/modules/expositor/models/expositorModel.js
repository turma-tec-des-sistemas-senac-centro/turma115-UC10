const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../../database');

const Expositor = sequelize.define('Expositor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: "E-mail inválido." },
      len: {
        args: [10, 100],
        msg: "O e-mail deve ter entre 10 e 100 caracteres.",
      },
    },
  },
  instituicao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'expositores',
  createdAt: "criado_em",
  updatedAt: "atualizado_em",
});

module.exports = Expositor;