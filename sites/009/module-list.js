(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "m1":        {url:"$H/m/page-01.html"},
        "m2":        {url:"$H/m/page-02.html"},
        "m3":        {url:"$H/m/page-03.html"},
        "m4":        {url:"$H/m/page-04.html"},
        "m5":        {url:"$H/m/page-05.html"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
