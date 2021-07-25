const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const renderHTML = (filePath, res) => {
    return fs.readFile(`${__dirname}${filePath}`, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
    });
};

const handleRequest = (req, res) => {
    const path = req.url;

    switch (path) {
        case '/notes' :
            return renderHTML(`${path}.html`, res);
        default:
            return renderHTML('/index.html', res);
    }
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});