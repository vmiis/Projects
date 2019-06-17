(function(){
    //-------------------------------------------------------------------------------------
    //generic
    var modules={
        "short-page":  		{url:"$M/s/short-page.html",router:1},
        "long-page":  		{url:"$M/l/long-page.html",router:1},
        "about-vmiis":  	{url:"$M/a/about-vmiis.html",router:1},
    }
    $vm.m_path='https://modules.vmiis.com'; if($vm.localhost==true) $vm.m_path='http://'+window.location.hostname+':8000/vmiis/modules'; 
    for(m in modules){   modules[m].url=modules[m].url.replace('$M',$vm.m_path); $vm.module_list[m]=modules[m];}
    //-------------------------------------------------------------------------------------
})();
