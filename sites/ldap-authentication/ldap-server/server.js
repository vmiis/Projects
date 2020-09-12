var ActiveDirectory =require('activedirectory2');
var config = { 
	url: 		process.env.LDAP_URL,
	baseDN: 	process.env.LDAP_baseDN,
	username: 	process.env.LDAP_USERNAME,
	password: 	process.env.LDAP_PASSWORD 
}
var ad=new ActiveDirectory(config);
console.log(config)

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, './');
const httpServer = http.createServer((request, response) => {
    if(request.method=='GET'){
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
    }
    else if(request.method=='POST'){
        var r_data='';
        request.on('data',function(data){
          r_data+=data;
        });
        request.on('end',function(){
            d=JSON.parse(r_data);
            if(d.cmd=="signinad"){
                var token=new Date().toString();
                var username=process.env.LDAP_NAME_B+d.data.Username+process.env.LDAP_NAME_E;
                var password=d.data.Password;
                try{
                    ad.authenticate(username,password, function(err, results) {
                        console.log(results);
                        if(results==true){
                            ad.findUser(username,function(err, user){
                                console.log(user);
                                response.writeHead(200);
                                response.end(JSON.stringify({username:username,displayName:user.displayName,sys:{token:token}}));
                            })
                        }
                        else{
                            response.writeHead(200);
                            response.end(JSON.stringify({username:username,sys:{token:""}}));
                        } 
                    })
                }catch(e){
                    console.log(e);
                    response.writeHead(200);
                    response.end(JSON.stringify({username:username,sys:{token:""}}));
                }
            }
            else{
                response.writeHead(200);
                response.end('');
            }
        })
    }
    else{
        response.writeHead(405);
        response.end("No permission");
    }
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
httpServer.listen(process.env.PORT, () => {
    console.log('\x1b[32m%s\x1b[0m', `Server is running at http://localhost:${httpServer.address().port}`);
});
