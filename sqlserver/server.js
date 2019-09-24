const express		=require('express');
const http			=require('http');
const fs			=require('fs');
const server 		=express();
var Connection 		=require('tedious').Connection;  
var Request 		=require('tedious').Request  
var TYPES 			=require('tedious').TYPES;  
var conn;
//---------------------------------------------------
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
					var sql="INSERT table1 (data) OUTPUT INSERTED.ID VALUES (@data);"
					var request = new Request(sql, function(err) {  
						if (err) {  
							console.log(err);
						}  
					});
					request.addParameter('data', TYPES.NVarChar,JSON.stringify(d.data));  
					request.on('row', function(columns) {  
						res.send('We have received and processed your request.');
					});
					conn.execSql(request);  
					break;
				case "cmd02":
					var _rows=[]
					var sql="select top 1 ID,data from table1 order by ID DESC;";
					var request = new Request(sql, function(err) {  
						if (err) {  
							console.log(err);
						}  
					});
					request.addParameter('data', TYPES.NVarChar,JSON.stringify(d.data));  
					request.on('row', function(columns) {  
						var _item = {};
						for (var i in columns) {
							if(columns[i].metadata.colName=='data'){
								_item=JSON.parse(columns[i].value);
							}  
						}
						_rows.push(_item);
					});
       				request.on('doneInProc', function(rowCount, more) {  
        				console.log(rowCount + ' rows returned');  
						res.send(_rows);
					});  
					conn.execSql(request);  
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
	//---------------------------------------------------
	var config = {  
		server: c.db_server,
		authentication: {
			type: 'default',
			options: {
				userName: c.db_username,
				password: c.db_password
			}
		},
		options: {
			encrypt: false,
			database: c.db_name
		}
	};  
	conn = new Connection(config);  
	conn.on('connect', function(err) {  
		console.log("SQL server is connected!");  
	});  
	//---------------------------------------------------
})
//---------------------------------------------------
