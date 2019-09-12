$vm.m365_init=function(){
    var h=window.location.protocol+"//"+window.location.hostname;
    var p=window.location.port;
    if(p!="") h=h+":"+p;

    $vm.m365_scope={
        scopes: ["user.read"]
    };
    $vm.msalConfig={
        auth: {
            clientId: 'f39f8959-8cd7-4570-8c0f-548306bf899a', 
            redirectUri:h+"/microsoft-authentication.html",
        },
        cache: {
            cacheLocation: "localStorage",
            storeAuthStateInCookie: true
        },
    };
    $vm.m365_msal=new Msal.UserAgentApplication($vm.msalConfig);
    $vm.m365_signin=function (){
        $vm.m365_msal.loginPopup($vm.m365_scope).then(function (loginResponse) {               
            return $vm.m365_msal.acquireTokenSilent($vm.m365_scope);
        }).then(function (accessTokenResponse) {
            $vm.m365_init();
        }).catch(function (error) {  
            console.log(error);
            alert(error)
        });
    }
    $vm.m365_signout=function() {
	    $vm.clear_token();
        $vm.m365_msal.logout();
    }
    $vm.m365_graph=function(url,scope,callback){
        $vm.m365_msal.acquireTokenSilent(scope).then(function (tokenResponse) {
            var xmlHttp = new XMLHttpRequest();
            var mt1=new Date().getTime();
            xmlHttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200){
                    var data=JSON.parse(this.responseText);
                    callback(data);
                }
                else if(this.readyState == 4 && this.status == 403){
                    $vm.alert("No permission");
                    callback({});
                }
                if(this.status == 404){
                    $vm.alert(url+", 404 (Not found)");
                    callback({});
                }
            }
            xmlHttp.open("GET", url, true); // true for asynchronous
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + tokenResponse.accessToken);
            xmlHttp.setRequestHeader("Accept", "application/json");
            xmlHttp.send();
        }).catch(function (error){
            console.log(error);
            $vm.alert("You haven't signed in, or your previous session has expired.")
        });
    };
    //------------------------------------
    if($vm.m365_msal.getAccount()!=undefined){
        var t1=(new Date().getTime() + 1) / 1000;
        var t2=parseInt($vm.m365_msal.getAccount().idToken.exp);
        console.log(t2);
        console.log(t1);
        var dt=t2-t1
        console.log(dt);
        if(dt<0){
            alert("The session has expired.");
            $vm.m365_signin();
            return;
        }

        $vm.m365_msal.acquireTokenSilent({scopes: ["user.read"]}).then(function (tokenResponse){
            //console.log(tokenResponse);
            //$vm.microsoft_token=tokenResponse.accessToken;
            $vm.microsoft_token=tokenResponse.idToken.rawIdToken;
            $vm.user_name_3rd=$vm.m365_msal.getAccount().name;
            $vm.issuer_3rd="microsoft";
            $vm.user_name_365=$vm.m365_msal.getAccount().userName;
            if($vm.app_after_3rd_signin!=undefined) $vm.app_after_3rd_signin();
        }).catch(function (error){
            console.log("S:"+error);
            console.log("more than 1 hour. need login again.");
            //$vm.m365_msal.logout();
            $vm.m365_signin();
        });
    }
    else{
        console.log("No account was found, redirect to signin.");
        $vm.m365_signin();
    }
    //------------------------------------
}
$vm.m365_init();

