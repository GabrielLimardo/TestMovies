module.exports = (sequelize, dataTypes ) => {
    const alias = "Peliculas";
    const cols = {
        title: dataTypes.STRING,
        rating: dataTypes.INTEGER,
        length: dataTypes.INTEGER,
    }
    const Pelicula = sequelize.define(alias, cols);
    return Pelicula
}