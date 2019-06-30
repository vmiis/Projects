(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "dashboard":  	    {url:"$H/m/dashboard.html",router:1},
        "request-all-data": {url:"$H/m/request-data.html",Table:"request-demo-001",Table2:"approval-demo-001",form_module:"request-form",router:1,email_to_manager:"email-to-manager",all:1,title:'All Requests'},
        "request-data":  	{url:"$H/m/request-data.html",Table:"request-demo-001",Table2:"approval-demo-001",form_module:"request-form",router:1,email_to_manager:"email-to-manager",title:'My Requests'},
        "request-form":  	{url:"$H/m/request-form.html",Table:"request-demo-001",email_to_manager:"email-to-manager",manager_list_table:"email-list-demo-001"},

        "approval-data":  	{url:"$H/m/approval-data.html",Table:"request-demo-001",Table2:"approval-demo-001",form_module:"approval-form",router:1,title:'My Approvals'},
        "approval-form":  	{url:"$H/m/approval-form.html",Table:"approval-demo-001",manager_list_table:"email-list-demo-001"},
        
        "email-to-manager": {url:"$H/m/email-to-manager.html",router:1},
        
        "manager-list-data":  	{url:"$H/m/setup-email-list-data.html",Table:"email-list-demo-001",form_module:"manager-list-form",router:1,title:'Manager List'},
        "manager-list-form":  	{url:"$H/m/setup-email-list-form.html",Table:"email-list-demo-001",title:'Manager List'},


        "about-vmiis":  {url:"$H/m/about-vmiis.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
