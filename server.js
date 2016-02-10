var app = require('express')();
var _ = require('lodash');
var port = 9001;

var item = [
        {
            id:02,
            title: 'This is the title of the First item',
            image:'/images/img1.jpg',
            category: 'This is the subtitle for the first item',
            body:'At 9.5 acres, Pier 1 is the largest of the Brooklyn Bridge Park piers, and the only pier that is built on landfill rather than on pile-supported structure. Brooklyn Bridge Park Conservancy offers free movies and other programming during summer months at Pier 1. Pier 1 includes two large lawns, Bridge View lawn and Harbor View lawn, a playground at the northern edge with play equipment for younger children, a waterfront promenade, and a series of tree-lined pathways that provide a varied waterfront experience.',
            contact: {
                email:'info@26bridge.com',
                phone:'(718) 310-3040',
                url:'http://26bridge.com/'
            },
            eventsTitle:'THIS IS THE SUBTITLE FOR THE FIRST ITEM',
            events: [
                {
                    name:'This is an event at Newport',
                    url:'http://google.com'
                },
                {
                    name:'CA conference',
                    url:'http://google.com'
                },
                {
                    name:'The surf Event',
                    url:'http://google.com'
                },
                {
                    name:'Tool 2016 Live',
                    url:'http://google.com'
                }
            ]
        },
        {
            id:04,
            title: 'This is the title of the second item',
            image:'/images/img2.jpg',
            category: 'This is the subtitl',
            body:'At 9.5 acres, Pier 1 is the largest of the Brooklyn Bridge Park piers, and the only pier that is built on landfill rather than on pile-supported structure. Brooklyn Bridge Park Conservancy offers free movies and other programming during summer months at Pier',
            contact: {
                email:'info@26bridge.com',
                phone:'(718) 310-3040',
                url:'http://26bridge.com/'
            },
            eventsTitle:'THIS IS THE SUBTITLE FOR THE FIRST ITEM',
            events: [
                {
                    name:'Pearl Jam at Madison SG',
                    url:'http://google.com'
                },
                {
                    name:'CG Networks Event',
                    url:'http://google.com'
                },
                {
                    name:'Quicksilver pro Surf Show',
                    url:'http://google.com'
                },
                {
                    name:'Scuba SideMount event',
                    url:'http://google.com'
                }
            ]
        },
        {
            id:06,
            title: 'This is the title of the Third item',
            image:'/images/img3.jpg',
            category: 'This is the subtitl',
            body:'ers, and the only pier that is built on landfill rather than on pile-supported structure. Brooklyn Bridge Park Conservancy offers free movies and other programming during summer months at Pier 1. Pier 1 includes two large lawns, Bridge .',
            contact: {
                email:'info@26bridge.com',
                phone:'(718) 310-3040',
                url:'http://26bridge.com/'
            },
            eventsTitle:'THIS IS THE SUBTITLE FOR THE FIRST ITEM',
            events: [
                {
                    name:'Lunch at Spyce',
                    url:'http://google.com'
                },
                {
                    name:'Christmas party 2017',
                    url:'http://google.com'
                },
                {
                    name:'Scuba Pro event',
                    url:'http://google.com'
                }
            ]
        },
        {
            id:22,
            title: 'This is anotheritem',
            image:'/images/img4.jpg',
            category: 'The New element',
            body:'Large lawns, Bridge View lawn and Harbor View lawn, a playground at the northern edge with play equipment for younger children, a waterfront promenade, and a series of tree-lined pathways that provide a varied waterfront experience.',
            contact: {
                email:'info@26bridge.com',
                phone:'(718) 310-3040',
                url:'http://26bridge.com/'
            },
            eventsTitle:'THIS IS THE SUBTITLE FOR THE FIRST ITEM',
            events: [
                {
                    name:'Iron Maiden SG',
                    url:'http://google.com'
                },
                {
                    name:'Ozzy Festival',
                    url:'http://google.com'
                },
                {
                    name:'Apple Event',
                    url:'http://google.com'
                },
                {
                    name:'LogiTech mouse click!',
                    url:'http://google.com'
                }
            ]
        }
    
    ];

app.get('/', function(req, res){

    res.contentType('application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json(item); 
});

app.get('/as_save_fb_event/:id', function(req, res){
    
    var param = parseInt(req.params.id);
    var result = _.find(item,['id',param]);
    
    res.contentType('application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    if (result) {
        res.json(result); 
    }else{
        res.json({message:'there is not item with such id: ' + param}); 
    }
    
});

app.get('/as_save_fb_event', function(req, res){
    
    res.json({message:'You must pass and Id to this endpoint. Ex: /as_save_fb_event/04'}); 

});

app.listen(port, function(){
    console.log('listening to localhost:9001');
})