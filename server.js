var app = require('express')();
var _ = require('lodash');
var port = 9001;

var modal = require('./js/modal')();
var thumbs = require('./js/thumbs')();

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
app.get('/events/:category', function(req, res){
    
    var param = req.params.category;
    var result = _.find(thumbs,['category',param]);
    
    res.contentType('application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    if (result) {
        res.json(result); 
    }else{
        res.json({message:'there is not item in the category: ' + param}); 
    }
    
});

app.get('/as_save_fb_event', function(req, res){
    
    res.json({message:'You must pass and Id to this endpoint. Ex: /as_save_fb_event/04'}); 

});

app.get('/events', function(req, res){
    
    res.json({message:'You must pass a category to this endpoint. Ex: /events/kids'}); 

});

app.listen(port, function(){
    console.log('listening to localhost:9001');
})