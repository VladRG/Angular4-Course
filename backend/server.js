const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('hello');
});

app.post('/login', function (req, res) {
    if (req.body.username === 'test' && req.body.password === 'test123') {
        res.statusCode = 201;
        res.send(req.body)
    } else {
        res.statusCode = 401;
        res.send('Bad Credentials!');
    }
});

app.listen(3000);
console.log("Running on 3000");