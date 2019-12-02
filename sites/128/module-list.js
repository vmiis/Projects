(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "image-effect": {url:"$H/m/emage-effect.html"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
