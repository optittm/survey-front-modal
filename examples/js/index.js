const express = require('express');
const appRoot = process.env.PWD;
const cors = require('cors');
const app = express()
app.use(cors())
app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    console.log(`${appRoot}/dist/bundle.js`)
});
app.get('/ottm-modal-feedback.js', function(req, res) {
    res.sendFile(`${appRoot}/dist/bundle.js`);
});
app.listen(4000, function () {
    console.log("Example app listening at http://localhost:4000")
});