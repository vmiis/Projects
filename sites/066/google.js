//---------------------------------------------
$vm.google_init=function(button_id){
    //------------------------------------
	$.getScript('https://apis.google.com/js/api.js',function(){
		gapi.load('auth2', function(){
			auth2 = gapi.auth2.init({
                client_id:'485153637765-maqa89r5jm9rusuc1u87sh72lrlpckk3.apps.googleusercontent.com',
				cookiepolicy: 'single_host_origin',
				scope: 'profile'
			});
			var element=document.getElementById(button_id);
			auth2.attachClickHandler(
                element, 
                {}, 
                function(googleUser) {
                    var profile = googleUser.getBasicProfile();
                    $vm.user_name_3rd=profile.getName();
                    if($vm.app_after_3rd_signin!=undefined) $vm.app_after_3rd_signin();
				},
				function(error){}
			);
		});
	});
    $vm.google_signout=function(){
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut();
        $vm.signout();
    }
    //------------------------------------
    /*
    $vm.google_api=function(endpoint, callback){
        var xmlHttp = new XMLHttpRequest();
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
    }
    */
}
//---------------------------------------------
//$vm.google_init();
//---------------------------------------------
