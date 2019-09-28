(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "p1":        {url:"$H/m/p1.html"},
        "p2":        {url:"$H/m/p2.html"},
        "p3":        {url:"$H/m/p3.html"},
        "p4":        {url:"$H/m/p4.html"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
