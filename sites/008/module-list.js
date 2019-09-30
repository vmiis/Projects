(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "m1":    {url:"$H/p/panel.html",router:1},
        "first":        {url:"$H/m/first.html"},
        "second":       {url:"$H/m/second.html"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
