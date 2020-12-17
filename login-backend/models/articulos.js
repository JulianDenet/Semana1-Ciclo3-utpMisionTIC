module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id:{
            type: type.INTEGER,
            primaryKey : true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        descripcion: type.STRING,
        categoria: type.STRING,
        precio: type.INTEGER
    })
}