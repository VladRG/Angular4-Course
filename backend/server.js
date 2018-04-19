const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('hello');
});

app.listen(3000);
console.log("Running on 3000");