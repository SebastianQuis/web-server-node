const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// definiendo variables globales
dotenv.config();
const app = express();

// const port = 8080;


// servir contenido estático - referencia al public/index.html
app.use(express.static(path.join(__dirname, 'public')));
// app.use( express.static('public') );


app.get('/index', (req, res) => {
  res.sendFile( path.join(__dirname + '/public/index.html'));
});


app.get('/elements', (req, res) => {
  res.sendFile( path.join(__dirname + '/public/elements.html'));
});


app.get('/generic', (req, res) => {
  res.sendFile( path.join(__dirname + '/public/generic.html'));
});


app.get('*', (req, res) => {
  // res.send('Page 404 || Nots found');
  res.sendFile( path.join(__dirname + '/public/404.html')); // dirname apunta al url principal
});



app.listen(process.env.PORT, () => {
    console.log(`Corriendo en http://localhost:${process.env.PORT}`);
})


