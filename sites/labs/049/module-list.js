(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "m1":  	{url:"$H/m/short-page.html",router:1},
        "m2":  	{url:"$H/m/long-page.html",router:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
