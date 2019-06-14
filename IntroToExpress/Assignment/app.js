var express = require("express");
var app = express();

var sorryMessage = "Sorry, page not found... What are you doing with your life?";

// Visiting '/' should print "Hi there, welcome to my assignment!"
app.get('/', function(req, res) {
   res.send('Hi there, welcome to my assignment!');
});

// ===================================================================
// Visiting '/speak/pig' should print "The pig says 'Oink'"
// Visiting '/speak/cow' should print "The cow says 'Moo'"
// Visiting '/speak/dog' should print "The dog says 'Woof!'"
// Visiting '/speak/cat' should print "The cat says 'Purr'"
// Visiting '/speak/bear' should print "The bear says 'Grrr!'"
// ===================================================================
app.get('/speak/:animalName', function(req, res) {
    var animal = req.params.animalName.toLowerCase();
    // var animalNoise;
    var sounds = {
      pig: 'Oink',
      cow: 'Moo',
      dog: 'Woof!',
      cat: 'Purr',
      bear: 'Grrr!'
    };
    var sound = sounds[animal];
    res.send('The ' + animal + ' says "' + sound + '"');
});

// ===================================================================
// Visiting '/repeat/hello/3' should print "hello hello hello"
// Visiting '/repeat/hello/5' should print "hello hello hello hello hello"
// Visiting '/repeat/blah/2' should print "blah blah"
// ===================================================================
app.get('/repeat/:message/:iterations', function(req, res) {
    var i = parseInt(req.params.iterations, 10),
        messageString = req.params.message;
    if (isNaN(i)) {
        res.send(sorryMessage);
    } else {
        var messageArray = [];
        for (var x = 0; x < i; x++) {
            messageArray.push(messageString);
        }
        res.send(messageArray.join(' '));
    }
});



// If a user visits any other route, print:
// "Sorry, page not found... What are you doing with your life?'"

app.get("*", function(req, res) {
    res.send('Sorry, page not found... What are you doing with your life?');
});

// Tell Express to listen for request (start server)

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!!!");
});
