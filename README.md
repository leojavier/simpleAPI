# SIMPLE API
##### Version 1.0.0

A simple API to serve Json files.

###Dependencies to run the App

  - NodeJS V0.10.31
  - NPM V1.4.23

### Installation

```sh
$ npm install
```
### To Run the project
```sh
$ node server
```
### To Execute calls
The server will run on localhost, port 9001 and it will allow any domain.

**There are two objects available to serve:** 
Please see the `models` bellow.


#### Model for Modal
```
[{
    id:02,
    title: 'This is the title of the First item',
    image:'/images/img1.jpg',
    category: 'This is the subtitle for the first item',
    body:'content.',
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
}]
```

To return an specific item:
```sh
http://localhost:9001/as_save_fb_event/id
```
- **IDs available to pass:** *02, 04, 06, 22*

### Errors
In case of errors it will return an object with a `message` property to report the error.

#### Model for Filters
```
[{{
    id:02,
    category: 'kids',
    url:'http://placecorgi.com/400/200',
    title:'68 JAY STREET BAR',
    overview:'68 Jay Street at Water Street',
    content:'content',
    date: {
        dayName:'Fri',
        day:30
    },
    today:false 
}]
```
To return all items:
```sh
http://localhost:9001/events
```

To return an specific item:
```sh
http://localhost:9001/events/category
```
- **categories available to pass:** *kids, family, shopping*

### Errors
In case of errors it will return an object with a `message` property to report the error.

