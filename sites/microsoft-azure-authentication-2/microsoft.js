$vm.m365_init=function(){
    var h=window.location.protocol+"//"+window.location.hostname;
    var p=window.location.port;
    if(p!="") h=h+":"+p;
    if(h.indexOf('projects.vmiis.com')!=-1) h=h+"/sites";
    $vm.m365_scope={
        scopes: ["user.read"]
    };
    $vm.msalConfig={
        auth: {
            clientId: '29b01605-7210-4cfc-afc7-b906afad60a2', 
            authority: "https://login.microsoftonline.com/common",
            redirectUri:h+"/microsoft/vmiis2.html",
        },
        cache: {
            cacheLocation: "localStorage",
            storeAuthStateInCookie: true
        },
    };
    $vm.m365_msal=new msal.PublicClientApplication($vm.msalConfig);
    $vm.m365_signin=function (){
        $vm.m365_msal.loginPopup($vm.m365_scope).then(function (resp) {  
            if (resp!==null) {
console.log(resp)
                /*
                $vm.m365_msal.acquireTokenSilent($vm.m365_scope).then(function (tokenResponse){
                    $vm.microsoft_token=tokenResponse.idToken.rawIdToken;
                    //$vm.user_name_3rd=$vm.m365_msal.getAccount().name;
                    //$vm.issuer_3rd="microsoft";
                    //if($vm.app_after_3rd_signin!=undefined) $vm.app_after_3rd_signin();
                }).catch(function (error){
                    console.log("S:"+error);
                });
                */
                $vm.microsoft_token=resp.idToken;
                $vm.user_name_3rd=resp.account.name;
                $vm.issuer_3rd="microsoft";
                if($vm.app_after_3rd_signin!=undefined) $vm.app_after_3rd_signin();
            } else {
            }
        })
    }
    $vm.m365_signout=function() {
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
    if(window.location.href.indexOf("signout=1")!=-1){
        $vm.m365_signout();
    }
    //------------------------------------
}
$vm.m365_init();

