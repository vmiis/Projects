const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, './');
const httpServer = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    let pathName = parsedUrl.pathname;
    if(pathName.endsWith("/")) pathName=pathName+'/index.html';
    console.log(pathName)    
    const responseContentType = getContentType(pathName);
    response.setHeader('Content-Type', responseContentType);
    fs.readFile(`${baseDir}${pathName}`, (error, data) => {
        if (!error) {
            response.writeHead(200);
            response.end(data);
        } else {
            console.log(error);
            response.writeHead(404);
            response.end('404 - File Not Found');
        }
    });
});
const mimeTypes = {
    '.html': 'text/html',
    '.jgp': 'image/jpeg',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.ico': 'image/x-icon',
};
const getContentType = pathName => {
    let contentType = 'application/octet-stream';
    for (var key in mimeTypes) {
        if (mimeTypes.hasOwnProperty(key)) {
            if (pathName.indexOf(key) > -1) {
                contentType = mimeTypes[key];
            }
        }
    }
    return contentType;
};
httpServer.listen(0, () => {
    console.log('\x1b[32m%s\x1b[0m', `Server is running at http://localhost:${httpServer.address().port}`);
});
