(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "panel":                {url:"$H/m/panel.html",router:1},
        "me":   	            {url:"$H/m/me.html"},
        "client-data":   	    {url:"$H/m/client-data.html",Table:"Clients", form_module:"client-form"},
        "client-form":   	    {url:"$H/m/client-form.html",Table:"Clients"},
        "about-vmiis":  {url:"$H/m/about-vmiis.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
