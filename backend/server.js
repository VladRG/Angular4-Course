const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



const users = require('./data/users');

app.get('/', function (req, res) {
    res.send('hello');
});

app.get('/users', function (req, res) {
    res.statusCode = 200;
    res.send(users);
})

app.post('/login', function (req, res) {
    const existingUser = users.filter((user) => user.username === req.body.username)[0];
    if (existingUser.password === req.body.password) {
        res.statusCode = 200;
        res.setHeader('Authorization', JSON.stringify(req.body));
        res.send(req.body)
    } else {
        res.statusCode = 401;
        res.send('Bad Credentials!');
    }
});

app.post('/register', function (req, res) {
    const existingUser = users.filter((user) => user.username === req.body.username)[0];
    if (existingUser) {
        res.statusCode = 403;
        res.send(`A user with the user name ${req.body.username} already exists.`);
    } else {
        users.push(req.body);
        res.statusCode = 201;
        res.send(req.body);
    }
});

app.listen(3000);
console.log("Running on 3000");