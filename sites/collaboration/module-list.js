(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "dashboard":  	            {url:"$H/m/dashboard.html",router:1},
        "request-approval-data":  	{url:"$H/m/request-approval-data.html",Table:"request-demo-001",Table2:"approval-demo-001",form_module:"request-approval-form",router:1},
        "request-approval-form":  	{url:"$H/m/request-approval-form.html",Table:"request-demo-001",Table2:"approval-demo-001",router:1},
        
        "about-vmiis":  {url:"$H/m/about-vmiis.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
