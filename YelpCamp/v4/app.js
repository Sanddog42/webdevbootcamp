var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    Campground = require("./models/campground"),
    mongoose = require("mongoose", {}),
    Comment = require("./models/comment"),
    seedDB = require("./seeds");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp_v3", {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

seedDB();

app.get("/", function(req, res){
    res.render("landing");
});


//INDEX route - show all campgrounds
app.get('/campgrounds', function(req, res){
    // GET ALL CAMPGROUNDS FROM DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds:allCampgrounds});
        }
    });
});

//CREATE route -- add new campground to database
app.post('/campgrounds', function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    // CREATE A NEW CAMPGROUND AND SAVE IT TO THE DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect('campgrounds');
        }
    });
});

//NEW route -- show form to create new campground
app.get('/campgrounds/new', function(req, res) {
   res.render("campgrounds/new"); 
});

//SHOW route -- shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    // find the campground with the provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground);
            // render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// ==================
// COMMENTS ROUTES
// ==================

// NEW COMMENTS ROUTE
app.get("/campgrounds/:id/comments/new", function(req, res) {
    // find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground}); 
        }
    });
});

app.post("/campgrounds/:id/comments", function(req, res){
   // lookup campground using ID
   Campground.findById(req.params.id, function(err, campground) {
       if (err) {
           console.log(err);
           res.redirect("/campgrounds");
       } else {
            // create new comment
            Comment.create(req.body.comment, function(err, comment){
                if (err) {
                    console.log(err);
                } else {
                    // connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    // redirect to campground show page
                    res.redirect('/campgrounds/' + campground._id);
                }
            });
        }
   });
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started");
});
