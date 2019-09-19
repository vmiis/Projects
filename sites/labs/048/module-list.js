(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "m1":	    {url:"$H/m/page-01.html",router:1,tags:'blog'},
        "m2":	    {url:"$H/m/page-02.html",router:1,tags:'blog'},
        "m3":	    {url:"$H/m/page-03.html",router:1,tags:'blog'},
        "m4":	    {url:"$H/m/page-04.html",router:1,tags:'blog'},
        "m5":	    {url:"$H/m/page-05.html",router:1,tags:'blog'},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
