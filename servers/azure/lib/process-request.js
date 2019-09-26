const vm_user=require('../lib/user');
exports.process_request=function(req, res, next){
	//-------------------------------------------------
	res.removeHeader("X-Powered-By");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
	//-------------------------------------------------
	setTimeout(function(){
		if(!res.headersSent){
			console.log("Too long, no response, so have to stop, send '' to client ...................................");
			res.send('');
		}
	}, 5000);
	//-------------------------------------------------
	var r_data='';
    req.on('data',function(data){
        r_data+=data;
    });
    req.on('end',function(){
        //------------------------------
	    var user=vm_user.get_user(req);
        var ip=req.connection.remoteAddress; if(ip.substr(0, 7)== "::ffff:") ip=ip.substr(7);
	   	var t=new Date().toLocaleTimeString();
	   	var rr="no referrer"; if(req.get('Referrer')!=undefined) rr=req.get('Referrer').substring(7,50);
	   	var txt=ip+" - "+rr+" - "+ user+" - "+t+" - "+req.method+' '+req.originalUrl+" "+r_data.substring(0,59);
		//------------------------------
		var cb=function(msg){ if(msg!='OPTIONS') console.log(txt+msg);	next();	}
		//--------------------------
		if(req.method=="POST"){
	        var d={};
	        try{
		        d=JSON.parse(r_data);
	        }
	        catch(e){
		        console.log(e.message);
		        res.send("");
    			next();
	        	return;
        	}
			//-----------------------------------------------------------------------------
            switch(d.cmd){
	            case "exchange-microsoft-token": vm_user.exchange_microsoft_token(req,res,user,d,cb); break;          
			}
		}
		//--------------------------
		else if(req.method=="GET"){
			if(req.originalUrl=="/") cb(" --- hello world");
			else if(req.originalUrl=="/favicon.ico")	cb(" --- favicon");
			else cb(" --- static");
			res.send('Hello World!');
		}
		//--------------------------
		else if(req.method=="OPTIONS"){
			cb(" --- OPTIONS");
			res.send("");
		}
		//--------------------------
		else{	
			res.send("");
			cb("");
		}
		//--------------------------
	})
}
//---------------------------------------------------
global.g_response=function(res,ret,dt1,cb){
	var dt=new Date().getTime()-dt1+'ms';
	if(!res.headersSent){
		if(ret.sys==undefined){
			ret.sys={
				elapsed_time:dt
			}
		}
		else{
			if(ret.sys.elapsed_time==undefined){ ret.sys.elapsed_time=dt;}
		}
		res.send(
			ret
		)	
		cb(" --- "+ret.status+" "+dt);
	}
	else{
		console.log("************* No response **********************");
		cb();
	}
}
//------------------------------------------------------------
