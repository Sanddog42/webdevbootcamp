var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs'); // * obviates need for .ejs file extensions

app.get('/', function(req, res){
    // res.render('home.ejs'); // * 
       res.render('home');
});


app.get('/fallinlovewith/:thing', function(req, res) {
   var thing = req.params.thing;
   res.render('love', {thingVar: thing});
//   res.render('love.ejs', {thingVar: thing}); //*

//   This also works.
//   res.render('love.ejs', {thingVar: req.params.thing});
});


app.get('/posts', function(req, res){
    var posts = [
       {title: 'Post 1', author: 'Suzy'},
       {title: 'My adorable pet bunny', author: 'Charlie'},
       {title: 'Can you believe this pomsky?', author: 'Colt'}
    ];

    // res.render('posts.ejs', {posts: posts}); //*
    res.render('posts', {posts: posts}); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening!!!");
});