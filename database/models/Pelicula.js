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
    Pelicula.associate = function(models){
        Pelicula.belongsTo(models.Generos, {
            as: "generos",
            foreignKey: "genre_id"
        })
        Pelicula.belongsToMany(models.Actores,{
            as: "actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        });
    }
    return Pelicula
}