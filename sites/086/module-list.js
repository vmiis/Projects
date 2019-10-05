(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "success-page": {url:"$H/m/success.html",router:1,tags:"marketing"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
