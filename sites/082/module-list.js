(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "my-request-data":  {url:"$H/m2/my-request-data.html",
            Table: "permission-request-demo-0711",
            Table2:"permission-approval-demo-0711",
            Table3:"permission-process-demo-0711",
            form_module:"my-request-form",router:1,title:"My requests"},
        "my-request-form":  	{url:"$H/m2/my-request-form.html",
            Table:"permission-request-demo-0711",
            manager_list_table:"email-list-demo-001",
            processor_list_table:"email-list-demo-002",
            email_to_manager:"email-to-manager"},

        "my-approval-data":  	{url:"$H/m2/my-approval-data.html",
            Table:"permission-request-demo-0711",
            Table2:"permission-approval-demo-0711",
            Table3:"permission-process-demo-0711",
            form_module:"my-approval-form",router:1,title:"My approvals"},
        "my-approval-form":  	{url:"$H/m2/my-approval-form.html",
            Table:"permission-approval-demo-0711",
            manager_list_table:"email-list-demo-001",
            processor_list_table:"email-list-demo-002",
            email_to_processor:"email-to-processor"},

        "my-process-data":  	{url:"$H/m2/my-process-data.html",
            Table:"permission-request-demo-0711",
            Table2:"permission-approval-demo-0711",
            Table3:"permission-process-demo-0711",
            form_module:"my-process-form",router:1,title:"My processes"},
        "my-process-form":  	{url:"$H/m2/my-process-form.html",
            Table:"permission-process-demo-0711",
            manager_list_table:"email-list-demo-001",
            processor_list_table:"email-list-demo-002",
            email_to_requester:"email-to-requester"},

        "all-request-data":  	{url:"$H/m2/all-request-data.html",
            Table:"permission-request-demo-0711",
            Table2:"permission-approval-demo-0711",
            Table3:"permission-process-demo-0711",
            form_module:"all-request-form",router:1,title:"All requests"},
        "all-request-form":  	{url:"$H/m2/all-request-form.html",
            Table:"permission-request-demo-0711",
            manager_list_table:"email-list-demo-001",
            processor_list_table:"email-list-demo-002"},


        "email-to-manager":     {url:"$H/m3/email-to-manager.html"},
        "email-to-processor":   {url:"$H/m3/email-to-processor.html"},
        "email-to-requester":   {url:"$H/m3/email-to-requester.html"},
        
        "manager-list-data":  	{url:"$H/m3/setup-email-list-data.html",Table:"email-list-demo-001",form_module:"manager-list-form",router:1,title:'Manager List'},
        "manager-list-form":  	{url:"$H/m3/setup-email-list-form.html",Table:"email-list-demo-001",title:'Manager List'},
        
        "processor-list-data":  {url:"$H/m3/setup-email-list-data.html",Table:"email-list-demo-002",form_module:"processor-list-form",router:1,title:'Processor List'},
        "processor-list-form":  {url:"$H/m3/setup-email-list-form.html",Table:"email-list-demo-002",title:'Processor List'},

        "dashboard":  	    {url:"$H/m1/dashboard.html",router:1},
        "workflow":         {url:"$H/m1/workflow.html",router:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
