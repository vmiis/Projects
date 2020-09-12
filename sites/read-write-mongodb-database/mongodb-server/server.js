/*
You should have a local mongodb instance with a 'demo_db' database and a 'demo_table' collection
*/
const MongoClient 	=require('mongodb').MongoClient;
const ObjectId 		=require('mongodb').ObjectID;
var db;
//---------------------------------------------------
MongoClient.connect("mongodb://localhost", {useNewUrlParser:true,useUnifiedTopology: true}, function(err, dbs){
	if(err) console.log(err);
	else{
        db=dbs.db("demo_db");
        console.log("Connected!");
    }
})
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
                db.collection("demo_table").find({}).sort({"_id":-1}).limit(1).toArray(function(err, result){
                    if(err) console.log(err);
                    console.log(result);
                    response.writeHead(200);
                    response.end(JSON.stringify(result));
                });
            }
            else if(d.cmd=="write"){
                db.collection("demo_table").find({}).sort({"_id":-1}).limit(1).toArray(function(err, result){
                    if(err) console.log(err);
                    console.log(result);
                    if(result.length==0){
                        db.collection("demo_table").insertOne(d.data,function(err, result){
                            if(err) console.log(err);
                            else{
                                response.writeHead(200);
                                response.end(JSON.stringify({status:"ok"}));
                            }
                        });
                    }
                    else{
						db.collection("demo_table").updateOne(
							{
								_id:ObjectId(result[0]._id)
							},
							{
								$set:d.data
							}, 
							function(err2, result2) {
								if(err2){
                                    response.writeHead(200);
                                    response.end(JSON.stringify({err:"server error"}));
                                }
								else{
                                    response.writeHead(200);
                                    response.end(JSON.stringify({status:"ok"}));
                                }
							}
						)
                    }
                });
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
