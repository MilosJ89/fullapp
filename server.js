const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, function() {
    console.log('Listening to port 3000');
});