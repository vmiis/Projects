/*
You should have a local SQL Server instance with a 'demo_db' database and a 'demo_table' table with a field (nvarchar(MAX)) called 'data' and a identity field called 'id'
*/
//---------------------------------------------------
var Connection 		=require('tedious').Connection;  
var Request 		=require('tedious').Request  
var TYPES 			=require('tedious').TYPES;  
var conn;

var config = {  
	server: '127.0.0.1',  //update your one
	authentication: {
		type: 'default',
		options: {
			userName: 'test', //update your one
			password: '123'   //update your one
		}
	},
	options: {
        instanceName:'VM',    //update your one
        encrypt: false,
        //validateBulkLoadParameters: true,
		database: 'demo_db'
	}
};  
conn = new Connection(config);  
conn.on('connect', function(err) {  
    if(err) console.log(err);
	else console.log("SQL server is connected!");  
});  
//---------------------------------------------------
const http = require('http');
const httpServer = http.createServer((request, response) => {
console.log(request.method)    
	response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
    if(request.method=='GET'){
        response.writeHead(200);
        response.end('Mongodb');
    }
    else if(request.method=='POST'){
        var r_data='';
        request.on('data',function(data){
          r_data+=data;
        });
        request.on('end',function(){
            d=JSON.parse(r_data);
            if(d.cmd=="read"){
                var _rows=[]
                var sql="select top 1 id,data from demo_table order by ID DESC;";
                var sqlrequest = new Request(sql, function(err) {  
                    if (err) {  
                        console.log(err);
                    }  
                });
                sqlrequest.on('row', function(columns) {  
                    var _item = {};
                    for (var i in columns) {
                        if(columns[i].metadata.colName=='data'){
                            _item=JSON.parse(columns[i].value);
                        }  
                    }
                    _rows.push(_item);
                });
                sqlrequest.on('requestCompleted', function(rowCount, more) {  
                    console.log(_rows);  
                    response.writeHead(200);
                    response.end(JSON.stringify(_rows));
                });
                conn.execSql(sqlrequest);  
            }
            else if(d.cmd=="write"){
                var id='';
                var sql="select top 1 id,data from demo_table;";
                var sqlrequest = new Request(sql, function(err) {  
                    if (err) {  
                        console.log(err);
                    }  
                });
                sqlrequest.on('row', function(columns) {  
                    var _item = {};
                    for (var i in columns) {
                        if(columns[i].metadata.colName=='id'){
                            id=columns[i].value;
                            break;
                        }  
                    }
                });
                sqlrequest.on('requestCompleted', function(rowCount, more){  
                    if(id==''){
                        var sql="INSERT demo_table (data) OUTPUT INSERTED.ID VALUES (@data);"
                        var sqlrequest = new Request(sql, function(err) {  
                            if (err) {  
                                console.log(err);
                                response.writeHead(200);
                                response.end(JSON.stringify({err:"server error"}));
                            }  
                        });
                        sqlrequest.addParameter('data', TYPES.NVarChar,JSON.stringify(d.data));  
                        sqlrequest.on('requestCompleted', function(columns) {  
                            response.writeHead(200);
                            response.end(JSON.stringify({status:"ok"}));
                        });
                        conn.execSql(sqlrequest);  
                    }
                    else{
                        var sql="UPDATE demo_table SET data=@data where id="+id;
                        var request = new Request(sql, function(err) {  
                            if (err) {  
                                console.log(err);
                                response.writeHead(200);
                                response.end(JSON.stringify({err:"server error"}));
                            }  
                        });
                        request.addParameter('data', TYPES.NVarChar,JSON.stringify(d.data));  
                        request.on('requestCompleted', function(columns) {  
                            response.writeHead(200);
                            response.end(JSON.stringify({status:"ok"}));
                        });
                        conn.execSql(request);  
                    }
                });
                conn.execSql(sqlrequest);  
            }
            else{
                response.writeHead(200);
                response.end('');
            }
        })
    }
    else{
        response.writeHead(200);
        response.end(request.method);
    }
});
httpServer.listen(process.env.PORT, () => {
    console.log('\x1b[32m%s\x1b[0m', `Server is running at http://localhost:${httpServer.address().port}`);
});
