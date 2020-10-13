//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const port = 3050;

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//Init Middleware - Allows us to get data from POST requests in req.body (api/)
app.use(express.json());


app.listen(process.env.PORT || port, function(){
  console.log('backend server running on port: ' + port);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.use('/api/profile', require('./api/profile'));
app.use('/api/string', require('./api/string'));
