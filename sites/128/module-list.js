(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "lightbox": {url:"$H/m/lightbox/m.html"},
        "hover-effect-01": {url:"$H/m/hover-effect-01/m.html"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
