(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "p1":                         {url:"$H/m/page-01.html",router:1},
        "p2":                         {url:"$H/m/page-02.html",router:1},
        "p3":                         {url:"$H/m/page-03.html",router:1},
        "p4":                         {url:"$H/m/page-04.html",router:1},
        "p5":                         {url:"$H/m/page-05.html",router:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
