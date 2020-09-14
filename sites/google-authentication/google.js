var GoogleAuth;
var SCOPE='profile';
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}
function initClient(){
    var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
    gapi.client.init({
        //'apiKey': 'YOUR_API_KEY',
        'clientId': '485153637765-maqa89r5jm9rusuc1u87sh72lrlpckk3.apps.googleusercontent.com',
        'discoveryDocs': [discoveryUrl],
        'scope': SCOPE
    }).then(function(){
        GoogleAuth = gapi.auth2.getAuthInstance();
        $vm.google_signin=function (){
            GoogleAuth.signIn();
        }
        $vm.google_signout=function (){
            GoogleAuth.signOut();
        }
        GoogleAuth.isSignedIn.listen(updateSigninStatus);
        setSigninStatus();
    })
}
function setSigninStatus(isSignedIn) {
    var user = GoogleAuth.currentUser.get();
    var isAuthorized = user.hasGrantedScopes(SCOPE);
    if (isAuthorized) {
        $vm.google_token=user.getAuthResponse().id_token;  // This gives you a Google Access Token. You can use it to access the Google API.
        $vm.user_name_3rd=user.getBasicProfile().getName();
        if($vm.app_after_3rd_signin!=undefined) $vm.app_after_3rd_signin(); 
    } 
}
function updateSigninStatus(isSignedIn) {
    setSigninStatus();
}
