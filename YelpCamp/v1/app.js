var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8577/16263386718_c019b13f77.jpg"},
    {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
    {name: "Mountain Goats Rest", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8577/16263386718_c019b13f77.jpg"},
    {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
    {name: "Mountain Goats Rest", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8577/16263386718_c019b13f77.jpg"},
    {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
    {name: "Mountain Goats Rest", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"},
    {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8577/16263386718_c019b13f77.jpg"},
    {name: "Granite Hill", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
    {name: "Mountain Goats Rest", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"}
];

app.get('/campgrounds', function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post('/campgrounds', function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image}
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect('campgrounds');
});

app.get('/campgrounds/new', function(req, res) {
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started");
});