const express = require('express');
const dotenv = require('dotenv');

// definiendo variables globales
dotenv.config();
const app = express();

// const port = 8080;


// servir contenido estático - referencia al public/index.html
app.use( express.static('public') );



app.get('/', function (req, res) {
  res.send('Sin parametros');
})

app.get('/hola-mundo', function (req, res) {
  res.send('Ruta desde hola-mundo'); // de prueba
});

app.get('*', function (req, res) {
  // res.send('Page 404 || Nots found');
  res.sendFile( __dirname + '/public/404.html'); // dirname apunta al url principal
});



app.listen(process.env.PORT, () => {
    console.log(`Corriendo en http://localhost:${process.env.PORT}`);
})


