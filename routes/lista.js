const express = require("express")
const router = express.Router();
const multer = require("multer");
const path = require("path");

const listaController = require("../controllers/listaController")

const validator = require('../middlewares/validator');


 
router.get("/", listaController.list);
router.get("/detail/:id", listaController.detail);
module.exports = router;
