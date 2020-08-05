const express = require("express")
const router = express.Router();
const multer = require("multer");
const path = require("path");

const listaController = require("../controllers/listaController")

const validator = require('../middlewares/validator');


 
router.get("/", listaController.list);
module.exports = router;
