(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "sales-data":  	            {url:"$H/m/sales-data.html",Table:"sales-demo-0703",form_module:"sales-form",router:1},
        "sales-form":  	            {url:"$H/m/sales-form.html",Table:"sales-demo-0703"},

        "sales-monthly-aggregation-data":  {url:"$H/m/sales-monthly-aggregation-data.html",Table:"sales-monthly-aggregation-demo-0703",form_module:"sales-monthly-aggregation-form",router:1,transaction_table:"sales-demo-0703"},
        "sales-monthly-aggregation-form":  {url:"$H/m/sales-monthly-aggregation-form.html",Table:"sales-monthly-aggregation-demo-0703"},
        

        "item-data":  	            {url:"$H/m/item-data.html",Table:"item-demo-0703",form_module:"item-form",router:1},
        "item-form":  	            {url:"$H/m/item-form.html",Table:"item-demo-0703"},
        "rep-data":  	            {url:"$H/m/rep-data.html",Table:"rep-demo-0703",form_module:"rep-form",router:1},
        "rep-form":  	            {url:"$H/m/rep-form.html",Table:"rep-demo-0703"},
        "region-data":  	        {url:"$H/m/region-data.html",Table:"region-demo-0703",form_module:"region-form",router:1},
        "region-form":  	        {url:"$H/m/region-form.html",Table:"region-demo-0703"},

        "dashboard":  	    {url:"$H/d/dashboard.html",router:1},
        "about-vmiis":      {url:"$H/d/about-vmiis.html",router:1},
        "module-editor":    {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
