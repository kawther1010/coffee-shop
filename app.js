var express = require("express");
var app = express();
const urlencoded = require('urlencode');
var shopcontroller = require('./controllers/shopcontroller');
const ejs = require("ejs");
const bodyParser = require("body-parser");
// set an engine template
app.set( 'view engine' , 'ejs' );
//set some static files
app.use(express.static('./public'));
//fire the controllers
shopcontroller(app);
//
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
//
app.use(bodyParser.urlencoded({extended: false}));
//Data
var buyers = [{
    id: 1,
    name:'Jake',
}]
app.post('/buy/' , (req , res)=>{
    const buyer = req.body;
    console.log(buyer);
    buyers.push(buyer);
    res.json(buyer);
});
//Listening
app.listen(3000, ()=>{
    console.log("running!")
});