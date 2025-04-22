const express = require('express');
const time = require('./middlewhare/time');
const validateServiceTime = require('./middlewhare/validateServiceTime');
const app = express();

app.use(express.json());
app.use(time);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/hora', (req, res) => {
    res.send(`Hora: ${req.time}`);
});

app.get('/validacao', validateServiceTime,(req, res) => {
    res.send("Acesso permitido");
});


app.listen(3000, () => {
    console.log('http://localhost:3000');
});