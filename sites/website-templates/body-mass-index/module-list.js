(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "body-mass-index":  {url:"$H/m/body-mass-index.html"},
        "health-news":      {url:"$H/m/health-news.html"},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
