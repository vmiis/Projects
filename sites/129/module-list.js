(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "reports":  	{url:"$H/m/reports.html",router:1},
        "about":  	    {url:"$H/0/about.html",router:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
