module.exports = (sequelize, DataTypes) => {


    // define(model)
    const Usuario = sequelize.define(
        'Usuario', {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            tableName: "usuarios",
            timestamps: false
        }
    );

    return Usuario;
}


