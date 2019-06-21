$vm.firebase_init=function(){
    var firebaseConfig = {
        apiKey: "AIzaSyAf8cO6hljobePOH3yOlD910cIhsIpVPgQ",
        authDomain: "flirbase.firebaseapp.com",
        databaseURL: "https://flirbase.firebaseio.com",
        projectId: "flirbase",
        storageBucket: "flirbase.appspot.com",
        messagingSenderId: "1003518397368",
        appId: "1:1003518397368:web:2ed1848ce3f86020"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    firebase.auth().onAuthStateChanged(function(user) {
        if(user){
            console.log(user);
            //$vm.firebase_user_name=$vm.user_name=user.displayName;
            //$vm.show_user();
            $vm.user_name_3rd=user.displayName;
            if($vm.app_after_3rd_signin!=undefined) $vm.app_after_3rd_signin();
        } 
        else {
        }
    });
    $vm.firebase_db=firebase.firestore();
    $vm.firebase_signin=function (){
        var provider = new firebase.auth.GoogleAuthProvider();            
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            //$vm.user_name=user.displayName;
            //$vm.show_user();
            $vm.user_name_3rd=response.name;
            if($vm.app_after_3rd_signin!=undefined) $vm.app_after_3rd_signin(); 
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(error)                    
        });
    }
    $vm.firebase_signout=function (){
        firebase.auth().signOut();
        location.reload(true);
    }
}
$vm.firebase_init();
//-------------------------------------
