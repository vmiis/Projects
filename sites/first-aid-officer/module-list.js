(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "first-aid-officer-data":    	{url:"$H/m/first-aid-officer-data.html",Table:"first-aid-officer-demo",form_module:"first-aid-officer-form",router:1},
        "first-aid-officer-form":    	{url:"$H/m/first-aid-officer-form.html",Table:"first-aid-officer-demo"},
        "first-aid-officer-panel":      {url:"$H/m/first-aid-officer-panel.html",router:1},
        "first-aid-officer-page":       {url:"$H/m/first-aid-officer-page.html",router:1},
        "about-vmiis":  {url:"$H/m/about-vmiis.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
