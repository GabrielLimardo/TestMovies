
const jsonModel = require('../models/jsonModel');
const { promiseImpl, render } = require("ejs");
const productModel = jsonModel('products');
const db = require("../database/models");
const sequelize = db.sequelize;

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const listaController = {
   
    list: (req, res) => {
        db.Peliculas.findAll()
            .then(function (peliculas) {
               res.render("lista", {peliculas: peliculas})
            })
            .catch(e => console.log(e))
    },
    
    detail: (req, res) => {
        db.Peliculas.findByPk(req.params.id)
            .then(function (pelicula) {
               res.render("detail", {pelicula: pelicula})
            })
            .catch(e => console.log(e))
    }
}

module.exports = listaController;