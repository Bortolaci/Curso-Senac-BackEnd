const express = require('express');
const app = express();
const port = 3000;

app.get('/home', (req, res) => {
    res.send('Ruas de lágrimas');
});

app.listen(port , () => {
    console.log(`App está ouvindo a porta ${port}`);
});