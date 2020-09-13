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
            $vm.user_name_3rd=user.displayName;
            firebase.auth().currentUser.getIdToken(false).then(function(idToken){
                $vm.google_firebase_token=idToken;
                if($vm.app_after_3rd_signin!=undefined) $vm.app_after_3rd_signin();
            }).catch(function(error) {
                console.log(error);
            });            
        } 
        else {
        }
    });
    $vm.firebase_db=firebase.firestore();
    $vm.firebase_signin=function (){
        var provider = new firebase.auth.GoogleAuthProvider();            
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;  // This gives you a Google Access Token. You can use it to access the Google API.
            var user = result.user; // The signed-in user info.
            $vm.user_name_3rd=result.name;
            if($vm.app_after_3rd_signin!=undefined) $vm.app_after_3rd_signin(); 
        }).catch(function(error) {
            var errorCode = error.code; // Handle Errors here.
            var errorMessage = error.message;
            var email = error.email; // The email of the user's account used.
            var credential = error.credential; // The firebase.auth.AuthCredential type that was used.
            console.log(error)                    
        });
    }
    $vm.firebase_signout=function (){
        firebase.auth().signOut();
        location.reload();
    }
}
$vm.firebase_init();
//-------------------------------------
