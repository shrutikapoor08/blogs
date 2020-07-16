const express = require("express");
var path = require('path');

const app = express();
const port = process.env.CLIENT_PORT || 3000;


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
