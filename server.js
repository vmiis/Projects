const express	=require('express');
const http		=require('http');
const fs 	 	=require('fs');
//---------------------------------------------------
var password={}
//---------------------------------------------------
const server 		=express();
server.use(express.static(__dirname + '/sites'));
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
		console.log(d.path)
		if(ip=="::ffff:127.0.0.1a" || ip=="::1a"){
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
