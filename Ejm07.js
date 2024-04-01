// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/home' ) {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Welcome to the Home Page!');
//     } else if (req.url === '/about') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('About us Page. \n');
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end('Page Not Found');
//     }
// });
// //Listening for the 'request' event
// server.on('request', (req, res) => {
//     console.log(`Request received for URL: ${req.url}`);
// });
// server.listen(3000, () => {
//     console.log('Server listening on port 3000');
// });

const http = require('http');

const routes = {
    '/home': 'Welcome to the Home Page!',
    '/about': 'About us Page. \n'
};

const notFoundMessage = 'Page Not Found';

const server = http.createServer((req, res) => {
    const { url } = req;

    if (routes[url]) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(routes[url]);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end(notFoundMessage);
    }
});

server.on('request', (req, res) => {
    console.log(`Request received for URL: ${req.url}`);
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
