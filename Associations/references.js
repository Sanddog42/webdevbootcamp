var mongoose = require("mongoose", {});

// APP CONFIG
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo_2", {useMongoClient: true});

var Post = require("./models/post");
var User = require("./models/user");

// Post.create({
//     title: "How to Cook the Best Burger, Pt. IV",
//     content: "Lorem ipsum et cetera et al. Nabisco dominos ad naseum."
// }, function(err, post){
//     User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//       if(err){
//           console.log(err);
//       } else {
//           foundUser.posts.push(post);
//           foundUser.save(function(err, data){
//               if(err){
//                   console.log(err);
//               } else {
//                   console.log(data);
//               }
//           });
//         }
//     });
// });

// FIND USER
// FIND ALL POSTS FOR THAT USER

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });


// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

