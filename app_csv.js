
const http = require('http');

const server = http.createServer((req, res) => {
    
    // console.log(req); // informacion del cliente que entra al server

    res.setHeader('Content-Disposition', 'attachment; filename="orders-export.csv'); // nombre de archivo a exportar
    res.writeHead(200, {'Content-Type': 'application/csv'}); // exporta archivo CSV

    res.write('id; name; fullname; email\n');
    res.write('1; juan; perez; prueba@gmail.com\n');
    res.write('2; alex; santiago; prueba@gmail.com\n');
    res.end();

});

server.listen(8080);


console.log('Servidor corriendo en: ', 8080);

