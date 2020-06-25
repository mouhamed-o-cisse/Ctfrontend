const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/newctfrontend'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/newctfrontend/index.html'));});

app.listen(process.env.PORT || 1111);

console.log('Server started');
