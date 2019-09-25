const express		=require('express');
const http			=require('http');
const fs			=require('fs');
const server 		=express();
const MongoClient 	=require('mongodb').MongoClient;
var db;
//---------------------------------------------------
MongoClient.connect("mongodb://localhost", {useNewUrlParser:true,useUnifiedTopology: true}, function(err, dbs){
	if(err) console.log(err);
	db=dbs.db("db1");
})
server.use(function(req, res, next){
	//-------------------------------------------------
	res.removeHeader("X-Powered-By");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
	//-------------------------------------------------
	if(req.method=="GET"){
		console.log(req.connection.remoteAddress.replace("::ffff:","")+" --- "+req.url);
		res.send('Hello World!');
	}
	else if(req.method=="POST"){
		var r_data='';
		req.on('data',function(data){
		r_data+=data;
		});
		req.on('end',function(){
			d=JSON.parse(r_data);
			console.log(d);
			switch(d.cmd){
				case "cmd01":
					db.collection("table1").insertOne(d.data,function(err, result){
						if(err) console.log(err);
					});
					res.send('We have received and processed your request');
					break;
				case "cmd02":
					db.collection("table1").find({}).sort({"_id":-1}).limit(1).toArray(function(err, result){
						if(err) console.log(err);
						console.log(result);
						res.send(result);
					});
					break;
				}	
		})
	}
	//--------------------------
	else{	
		res.send("");
		return;
	}
	//--------------------------
})
//---------------------------------------------------
fs.readFile("server.js.config.txt", 'utf8', function(err, txt){
	txt=txt.replace(/\\/g,'\\\\');
	var c=JSON.parse(txt);
	var port=c.port;
	http.createServer(
		server
	).listen(
		port,
		() => console.log("The server is listening on port "+port+"!") 
	);
})
//---------------------------------------------------
