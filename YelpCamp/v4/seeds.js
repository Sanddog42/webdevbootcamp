// "error-driven development"
var mongoose = require("mongoose", {});
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Granite Hill", 
        image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg",
        description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
    },
    {
        name: "Desert Mesa", 
        image: "https://farm9.staticflickr.com/8525/8546357078_fc1929a4d6.jpg",
        description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
    },
    {
        name: "Canyon Floor", 
        image: "https://farm3.staticflickr.com/2582/3820664827_6c2e9a69ae.jpg",
        description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
    }
]

function seedDB(){
    // remove all campgrounds
    Campground.remove({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("removed campgrounds");
            // add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        // create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet.",
                                author: "Homer"
                            }, function(err, comment){
                                if (err) {
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            }
                        )
                    }
                })
            });
        }
    });
    // add a few comments
}

module.exports = seedDB;