const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

// Serve static files from the 'dist' folder (Webpack output directory)
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    // Ensure the path is absolute by using path.join
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

// Example route for API response
app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});
