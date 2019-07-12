(function(){
    //-------------------------------------------------------------------------------------
    var modules={

        "purchase-order-my-request-data":  	{url:"$H/m5/my-request-data.html",
            Table: "purchase-order-request-demo190712",
            Table2:"purchase-order-approval-demo190712",
            Table3:"purchase-order-process-demo190712",
            form_module:"purchase-order-my-request-form",router:1,title:"My requests"},

        "purchase-order-my-request-form":  	{url:"$H/m5/my-request-form.html",
            Table:"purchase-order-request-demo190712",
            manager_list_table:"email-list-demo-001",
            processor_list_table:"email-list-demo-002",
            email_to_manager:"email-to-manager"},



        "security-access-card-my-request-data":  	{url:"$H/m2/security-access-card-my-request-data.html",
            Table: "security-access-card-request-demo-0709",
            Table2:"security-access-card-approval-demo-0709",
            Table3:"security-access-card-process-demo-0709",
            form_module:"security-access-card-my-request-form",router:1,title:"My requests"},
        "security-access-card-my-request-form":  	{url:"$H/m2/security-access-card-my-request-form.html",
            Table:"security-access-card-request-demo-0709",
            manager_list_table:"email-list-demo-001",
            processor_list_table:"email-list-demo-002",
            email_to_manager:"email-to-manager"},

        "security-access-card-my-approval-data":  	{url:"$H/m2/security-access-card-my-approval-data.html",
            Table:"security-access-card-request-demo-0709",
            Table2:"security-access-card-approval-demo-0709",
            Table3:"security-access-card-process-demo-0709",
            form_module:"security-access-card-my-approval-form",router:1,title:"My approvals"},
        "security-access-card-my-approval-form":  	{url:"$H/m2/security-access-card-my-approval-form.html",
            Table:"security-access-card-approval-demo-0709"},

        "security-access-card-my-process-data":  	{url:"$H/m2/security-access-card-my-process-data.html",
            Table:"security-access-card-request-demo-0709",
            Table2:"security-access-card-approval-demo-0709",
            Table3:"security-access-card-process-demo-0709",
            form_module:"security-access-card-my-process-form",router:1,title:"My processes"},
        "security-access-card-my-process-form":  	{url:"$H/m2/security-access-card-my-process-form.html",
            Table:"security-access-card-process-demo-0709"},

        "security-access-card-all-request-data":  	{url:"$H/m2/security-access-card-all-request-data.html",
            Table:"security-access-card-request-demo-0709",
            Table2:"security-access-card-approval-demo-0709",
            Table3:"security-access-card-process-demo-0709",
            form_module:"security-access-card-all-request-form",router:1,title:"All requests"},
        "security-access-card-all-request-form":  	{url:"$H/m2/security-access-card-all-request-form.html",
            Table:"security-access-card-request-demo-0709"},


        "email-to-manager":     {url:"$H/m2/email-to-manager.html",router:1},
        
        "manager-list-data":  	{url:"$H/m2/setup-email-list-data.html",Table:"email-list-demo-001",form_module:"manager-list-form",router:1,title:'Manager List'},
        "manager-list-form":  	{url:"$H/m2/setup-email-list-form.html",Table:"email-list-demo-001",title:'Manager List'},
        
        "processor-list-data":  {url:"$H/m2/setup-email-list-data.html",Table:"email-list-demo-002",form_module:"processor-list-form",router:1,title:'Processor List'},
        "processor-list-form":  {url:"$H/m2/setup-email-list-form.html",Table:"email-list-demo-002",title:'Processor List'},

        "dashboard":  	    {url:"$H/m1/dashboard.html",router:1},
        "module-editor":    {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
