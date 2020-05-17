var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var messagebird = require('messagebird')('          ');


var app = express();
app.engine('handlebars', exphbs({dafaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended : true }));


app.get('/', function(req,res){
    res.render('step1');
});

// Handle phone numbr submission
app.post('/step2', function(req, res){
    var number = req.body.number;

    // Make request to verify API
    messagebird.verify.create(number, {
        template : "your verification code is %token."
    }, function(err, response) {
        if (err) {
            //Request has failed
            console.log(err);
            res.render('step1',{
                error : err.errors[0].description
            });
        } else {
            //Request was successful
            console.log(response);
            res.render('step2', {
                id : response.id
            });
        }
    });   
});

//verify whether the token is correct
app.post('/step3', function(req, res){
    var id = req.body.id;
    var token = req.body.token;

    //Make request to verify API
    messagebird.verify.verify(id, token, function(err, response) {
        if (err) {
            //verification has failed
            res.render('step2', {
               error: err.eroors[0].description,
               id : id
            });
        }else {
            //Verification was successful
            res.render('step3');
        }
    });
});

// start the application
app.listen(3000, function(req, res){
    console.log("port running on 3000");
})