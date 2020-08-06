module.exports = (sequelize, dataTypes) => {
    let alias = "Actores";
    let cols = {
       first_name: dataTypes.STRING
    };
    let config = {
        tableName: "actors",
        timestamps: false,

    };
    const Actor = sequelize.define(alias, cols, config);
    Actor.associate = function(models){
        Actor.belongsToMany(models.Peliculas, {
            as: "peliculas",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        })
    }
    return Actor
}