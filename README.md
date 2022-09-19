## Getting Started

Open the 'index.html' with your browser to view the project.

## About the JSON file

As a JSON file is provided, we can assumpt that it is a dynamic data that cannot be wrote in the javascript file as a constant data. In this way, the most common way is to use a Fetch API method:

```javascript
fetch('./navigation.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
```

However, when we run this in a browser, we might get the a CORS error because our file is not on a server.

To fix this, we need to make sure JSON file is on a local or remote server. There are two options: 

1. Use Node.js server. To run a http server, we need to install install http-server. However, according to the instruction, we need to limit library useage, which means Node.js is not the best option.

2. Build a self API. With this idea, we can get the data with not node modules. 

At last, I choose option 2 to build this project with a self build API ('https://us-central1-vancouver-6aa33.cloudfunctions.net/api/cities'). You can find the details of in getting and mapping the raw data in 'init.js'.

## About responsive design

As the mobile and tablet design are not mentioned in the sample, we only accomplished the simplest responsive web design.

### Functions achieved

1. a sliding bar that indicates a selected item
2. On resize, the sliding indicator bar should update its position and size to match text.
3. Display the current time of the selected city.