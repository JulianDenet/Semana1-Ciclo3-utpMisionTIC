const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./users')
// const articulosModel = require('./articulos')

const sequelize = new Sequelize('4JtwDrERqb', '4JtwDrERqb', '45VEDneEaW', {
    host: 'remotemysql.com',
    port: '3306',
    dialect: 'mysql'
  });

const User = userModel(sequelize, Sequelize);
// const articulo = articulosModel(sequelize, Sequelize);

sequelize.sync({ force: false})
  .then(() => {
      console.log('Tablas sincronizadas')
  })

  module.exports = {
    User
  }