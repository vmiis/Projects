(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "short-page":  	{url:"$H/m/short-page.html",router:1},
        "long-page":  	{url:"$H/m/long-page.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
