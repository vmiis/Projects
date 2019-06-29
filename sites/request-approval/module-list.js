(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "dashboard":  	    {url:"$H/m/dashboard.html",router:1},
        "request-data":  	{url:"$H/m/request-data.html",Table:"request-demo-001",Table2:"approval-demo-001",form_module:"request-form",router:1},
        "request-form":  	{url:"$H/m/request-form.html",Table:"request-demo-001",email_to_manager:"email-to-manager"},

        "approval-data":  	{url:"$H/m/approval-data.html",Table:"request-demo-001",Table2:"approval-demo-001",form_module:"approval-form",router:1},
        "approval-form":  	{url:"$H/m/approval-form.html",Table:"approval-demo-001"},
        
        "email-to-manager": {url:"$H/m/email-to-manager.html",router:1},
        

        "about-vmiis":  {url:"$H/m/about-vmiis.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
