(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "workflow":                 {url:"$H/m/invoice-management-workflow.html",router:1,name:"Invoice management",tags:"invoice,finance"},
        "invoice-data": 	        {url:"$H/m/invoice-data.html",Table:"invoice-vm",form_module:"invoice-form",router:1},
        "invoice-form": 	        {url:"$H/m/invoice-form.html",Table:"invoice-vm",client_table:"client-wapp"},
        "invoice-print": 	        {url:"$H/m/invoice-print.html",Table:"invoice-vm", client_table:"client-wapp"},
        "client-data": 	            {url:"$H/m/client-data-wapp.html",Table:"client-wapp",form_module:"client-form",router:1},
        "client-form": 	            {url:"$H/m/client-form-wapp.html",Table:"client-wapp"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
