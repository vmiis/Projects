//------------------------------------------------------------
const crypto = require('crypto');
const jwksClient = require('jwks-rsa');
const jwt = require('jsonwebtoken');
//------------------------------------------------------------
exports.exchange_microsoft_token=function(req,res,user,d,cb){
    dt1=new Date().getTime();
	var token=d.token;
	
	var decoded = jwt.decode(token, {complete: true});
	var header = decoded.header
	var verifyOptions = {
	    algorithms: ['RS256'],
	    header: decoded.header
	};
	var client = jwksClient({
		jwksUri: 'https://login.microsoftonline.com/common/discovery/keys'
	});
	client.getSigningKey(header.kid, function(err, key) {
		if(key==undefined){
			console.log(token);
			g_response(res,{status:"err",result:"No key was found"},dt1,cb);
			return;
		}
		var signingKey = key.publicKey || key.rsaPublicKey;
		jwt.verify(token, signingKey, verifyOptions, function(err, decoded) {
			if(decoded!=undefined){
				var groups=decoded.groups;
				var token=get_token(decoded.preferred_username,groups); 
				g_response(res,{status:"ok",result:{
					user_name:decoded.preferred_username,
					user_displayname:decoded.name,
					token:token}},dt1,cb);
			}
			else{
				g_response(res,{status:"err",result:err},dt1,cb);
			}
		});	
    });
}
//------------------------------------------------------------
exports.get_user=function(req){
	var token=req.headers.authorization;
	if(token==undefined) return "guest";
	token=token.split(' ').pop();
	if(token!=""){
		t1=token.split('|')[0];
		t2=token.split('|').pop();
		const hash = crypto.createHmac('sha256', g_config.hashkey).update(t1).digest('hex');
	    if(hash==t2){
			var ob=JSON.parse(t1)
			return ob.username;
	    }	
	}
	return "guest";
}
//------------------------------------------------------------
exports.user_info=function(req,res,user,d,cb){
	var user="guest";
	var dt1=new Date().getTime();
	var token=req.headers.authorization;
	if(token==undefined) token="";
	token=token.split(' ').pop();
	if(token!=""){
		t1=token.split('|')[0];
		t2=token.split('|').pop();
		const hash = crypto.createHmac('sha256', g_config.hashkey).update(t1).digest('hex');
	    if(hash==t2){
			var ob=JSON.parse(t1)
			user=ob.username;
	    }	
	}
	g_response(res,{status:'ok',records:[{user_name:user,token:token}]},dt1,cb);
}
//------------------------------------------------------------
var get_token=function(username,groups){
	var token_0={username:username,time:new Date().getTime()}
	if(groups!=undefined) token_0['groups']=groups;
	var txt=JSON.stringify(token_0);
	const hash1 = crypto.createHmac('sha256', g_config.hashkey).update(txt).digest('hex');	
	return txt+"|"+hash1;
}
//------------------------------------------------------------
