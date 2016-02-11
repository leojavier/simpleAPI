var cors = require('cors')
var app = require('express')();
var _ = require('lodash');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
var port = 9001;

var modal = require('./js/modal')();
var thumbs = require('./js/thumbs')();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){

    res.contentType('application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json(modal); 
});

// Gets data to populate the modal
app.get('/as_save_fb_event/:id', function(req, res){
    
    var param = parseInt(req.params.id);
    var result = _.find(modal,['id',param]);
    
    res.contentType('application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    if (result) {
        res.json(result); 
    }else{
        res.json({message:'there is not item with such id: ' + param}); 
    }
    
});

//Gets data to filter the events
app.post('/filter', function(req, res){

    var result =[];
    for(var i =0; i < req.body.filters.length; i++) {
        
        var param = req.body.filters[i].name;
        
        //log filters coming from post
        for(var n =0; n < thumbs.length; n++) {
            if(thumbs[n].category == param) {
                result.push(thumbs[n]);
            }
        }
    }
    
    res.jsonp(result); 
    
});

app.get('/as_save_fb_event', function(req, res){
    
    res.json({message:'You must pass and Id to this endpoint. Ex: /as_save_fb_event/04'}); 

});

app.get('/events', function(req, res){
    
    res.contentType('application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json(thumbs); 

});

app.listen(port, function(){
    console.log('listening to localhost:9001');
})