var express = require("express");
var bodyParser = require("body-parser")
var app = express();
var port = 8000;
var mongoose = require("mongoose");


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/mern-demo");
var checkBoxSchema = new mongoose.Schema({
    value: Number,
});

var CheckBox = mongoose.model("CheckBox", checkBoxSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
 res.send("This is the backend API for the MERN Sample");
});

app.get('/api/add', (req, res)=>{
    var value = new CheckBox(req.query);
    value.save()
    .then(item => {
    res.send("item saved to database" + value.value);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
})

 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});