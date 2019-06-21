(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "purchase-order-workflow":  {url:"$H/m/purchase-order-workflow.html",router:1,name:"Purchase order",tags:"Purchase,order,finance"},
        "purchase-order-data-s":    {url:"$H/m/purchase-order-data-s.html",Table:"purchase-order",form_module:"purchase-order-form-s",router:1},
        "purchase-order-form-s":    {url:"$H/m/purchase-order-form-s.html",Table:"purchase-order",
                                        "manager_list_table":"manager-list",
                                        "accountant_list_table":"accountant-list",
                                        "email_to_manager":"purchase-order-email-to-manager"
                                    },

        "purchase-order-data-p1": {url:"$H/m/purchase-order-data-p1.html",Table:"purchase-order",form_module:"purchase-order-form-p1",router:1},
        "purchase-order-form-p1": {url:"$H/m/purchase-order-form-p1.html",Table:"purchase-order",
                                        "manager_list_table":"manager-list",
                                        "accountant_list_table":"accountant-list",
                                        "email_to_accountant":"purchase-order-email-to-accountant"
                                    },

        "purchase-order-data-p2": {url:"$H/m/purchase-order-data-p2.html",Table:"purchase-order",form_module:"purchase-order-form-p2",router:1},
        "purchase-order-form-p2": {url:"$H/m/purchase-order-form-p2.html",Table:"purchase-order",
                                        "manager_list_table":"manager-list",
                                        "accountant_list_table":"accountant-list",
                                        "email_to_requester":"purchase-order-email-to-requester"
                                    },
                                                                

        "purchase-order-email-to-manager":      {url:"$H/m/purchase-order-email-to-manager.html",Table:"email-setup"},
        "purchase-order-email-to-accountant":   {url:"$H/m/purchase-order-email-to-accountant.html",Table:"email-setup"},
        "purchase-order-email-to-requester":    {url:"$H/m/purchase-order-email-to-requester.html",Table:"email-setup"},
        "email-setup-data":      	  	{url:"$H/m/email-setup-data.html",Table:"email-setup",form_module:"email-setup-form"},
        "email-setup-form":      	  	{url:"$H/m/email-setup-form.html",Table:"email-setup"},         
        "manager-list-data":  	        {url:"$H/m/email-list-data.html",Table:"manager-list",form_module:"manager-list-form",router:1},
        "manager-list-form":  	        {url:"$H/m/email-list-form.html",Table:"manager-list"},
        "accountant-list-data":  	            {url:"$H/m/email-list-data.html",Table:"accountant-list",form_module:"accountant-list-form",router:1},
        "accountant-list-form":  	            {url:"$H/m/email-list-form.html",Table:"accountant-list"},
        
        "about-vmiis":  {url:"$H/m/about-vmiis.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
