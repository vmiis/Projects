const express	=require('express');
const http		=require('http');
const fs		=require('fs');
const dirTree   =require("directory-tree");
//---------------------------------------------------
var password={}
//---------------------------------------------------
const server 		=express();
//---------------------------------------------------
server.get('/*', function(req, res, next){
	debug(req,res);
    next();
});
//---------------------------------------------------
var content_path="";
//---------------------------------------------------
server.post('/*', function (req, res) {
	debug(req,res);
    next();
})
//---------------------------------------------------
var debug=function(req,res){
    //console.log(req.connection.remoteAddress.replace("::ffff:","")+" --- "+req.url);
	var r_data='';
	req.on('data',function(data){
      r_data+=data;
    });
    req.on('end',function(){
		//d=JSON.parse(r_data);
		//d.path=d.path.replace(/\\/g,'/');
		var ip=req.connection.remoteAddress;
		//console.log(ip);
		console.log(req.headers);
		console.log(r_data);
		//res.send("");
	})
}
//---------------------------------------------------
fs.readFile("server.js.password.txt", 'utf8', function(err, txt){
	var lines=txt.split('\n');
	for(var i=0;i<lines.length;i++){
		var items=lines[i].split(':');
		if(items.length==2){
			password[items[0]]=items[1].replace('\r','');
		}
	}
})
//---------------------------------------------------
fs.readFile("server.js.config.txt", 'utf8', function(err, txt){
	txt=txt.replace(/\\/g,'\\\\');
	var c=JSON.parse(txt);
	var port=c.port;
	content_path=c.static;
	if(content_path=="") content_path=__dirname.replace("\\servers\\web","\\sites");
	server.use(express.static(content_path));
	//server.use(express.static(__dirname+"\\tools"));
	http.createServer(
		server
	).listen(
		port,
		() => console.log("The server is listening on port "+port+"!") 
	);
})
//---------------------------------------------------
