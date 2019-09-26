const express	=require('express');
const http		=require('http');
const fs		=require('fs');
const server 	=express();
const vm_process=require('./lib/process-request');
global.g_config	={}
//---------------------------------------------------
server.use(vm_process.process_request);
//---------------------------------------------------
fs.readFile("server.js.config.txt", 'utf8', function(err, txt){
	txt=txt.replace(/\\/g,'\\\\');
	g_config=JSON.parse(txt);
	var port=g_config.port;
	http.createServer(
		server
	).listen(
		port,
		() => console.log("The server is listening on port "+port+"!") 
	);
})
//---------------------------------------------------
