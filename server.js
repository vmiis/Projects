const express	=require('express');
const http		=require('http');
const fs		=require('fs');
//---------------------------------------------------
var password={}
//---------------------------------------------------
const server 		=express();
//---------------------------------------------------
server.get('/*', function(req, res, next){
    console.log(req.connection.remoteAddress.replace("::ffff:","")+" --- "+req.url);
    next();
});
//---------------------------------------------------
server.use(express.static(__dirname + '/sites'));
//---------------------------------------------------
server.post('/', function (req, res) {
	var r_data='';
	req.on('data',function(data){
      r_data+=data;
    });
    req.on('end',function(){
		d=JSON.parse(r_data);
		var write=function(){
			fs.writeFile(__dirname+"/sites"+d.path, d.content, function (err) {
				if (err) {
					res.send(err);
				}
				else res.send("The file was saved!");
			});
		}
		var ip=req.connection.remoteAddress;
		console.log(ip);
		if(ip=="::ffff:127.0.0.1" || ip=="::1"){
			write();
		}
		else{
			var site="";
			var items=d.path.split('/');
			if(items.length>1){
				site=items[1];
				if(site.length>0 && password[site]==d.password){
					write();
				}
				else{
					res.send("Password is not correct!");
				}
			}
			else res.send("Bad request!");
		}
	})
})
//---------------------------------------------------
fs.readFile("sites-password.txt", 'utf8', function(err, txt){
	var lines=txt.split('\n');
	for(var i=0;i<lines.length;i++){
		var items=lines[i].split(':');
		if(items.length==2){
			password[items[0]]=items[1];
		}
	}
})
//---------------------------------------------------
fs.readFile("port.txt", 'utf8', function(err, port){
	http.createServer(
		server
	).listen(
		port,
		() => console.log("The server is listening on port "+port+"!") 
	);
})
//---------------------------------------------------
const https=require('https');
https.createServer(
	{
    	key: fs.readFileSync( '../../ssl/server.key'),
    	cert: fs.readFileSync( '../../ssl/server.cert')
	}, 	
	server
).listen(
	8433,
	() => console.log("The server is listening on port 8433!") 
);
//---------------------------------------------------
