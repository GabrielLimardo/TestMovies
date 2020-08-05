module.exports = (sequelize, dataTypes ) => {
    const alias = "Peliculas";
    const cols = {
        title: dataTypes.STRING,
        rating: dataTypes.INTEGER,
        length: dataTypes.INTEGER,
    }
    const config = {
        tableName: "movies",
        timestamps: false
    }
    const Pelicula = sequelize.define(alias, cols, config);
    return Pelicula
}