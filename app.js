const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
const homeRoutes = require('./routes/index');
const registerRoutes = require("./routes/register");
const listaRoutes = require("./routes/lista.js");


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); 
app.use(express.urlencoded({ extended: false}))
app.use(express.json());
app.use(cookieParser());




app.listen(3000, function() {
    console.log('-----------------------No error is running on 3000---------------------');
    console.log('<------------------------------------------------------------------------->');
    console.log("Esta parte de mi vida, este pequeño momento de mi vida lo llamo felicidad.");
  
})

app.use('/', homeRoutes);
app.use('/register', registerRoutes);
app.use("/lista", listaRoutes);
