const express = require('express');
const app = express()
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/ottm-modal-feedback.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/ottm-modal-feedback/dist/bundle.js');
});
app.listen(4000, function () {
    console.log("Example app listening at http://localhost:4000")
});