//---------------------------------------------
$vm.facebook_init=function(){
    //------------------------------------
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '596805194160323',
            xfbml      : true,
            version    : 'v8.0'
        });
        FB.AppEvents.logPageView();
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                FB.api('/me', function(response) {
                    $vm.facebook_user_name=response.name;
                    if($vm.app_after_3rd_signin!=undefined) $vm.app_after_3rd_signin();
                })
            } 
        });
    };
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    //------------------------------------
    $vm.facebook_signin=function(){
        FB.login(function(response){
            if(response.status==='connected'){
                $vm.facebook_token=response.authResponse.accessToken;
                FB.api('/me', function(response) {
                    $vm.facebook_user_name=response.name;
                    if($vm.app_after_3rd_signin!=undefined) $vm.app_after_3rd_signin();
                })
            }
            else{
            }
        }, {scope: 'public_profile,email'});
    }
    //------------------------------------
    $vm.facebook_signout=function(){
        FB.logout(function(response){
            $vm.signout();
        });
    }
    //------------------------------------
    $vm.facebook_api=function(endpoint, callback){
        FB.api(endpoint, function(response) {
            callback(response);
        })
    }
}
//---------------------------------------------
$vm.facebook_init();
//---------------------------------------------
