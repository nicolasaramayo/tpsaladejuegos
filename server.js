const express = require('express');
const app = express();
const path = require('path'); 
app.use(express.static(__dirname + '/angularpp'));

app.listen(process.env.port || 8080);

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname + '/angularapp/index.html'));
});

console.log('Build successful!!');