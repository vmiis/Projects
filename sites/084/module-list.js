(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        //transaction
        "sales-data":  	            {url:"$H/m/sales-data.html",Table:"sales-demo-0703",form_module:"sales-form",router:1},
        "sales-form":  	            {url:"$H/m/sales-form.html",Table:"sales-demo-0703"},

        //aggregation
        "sales-monthly-aggregation-data":   {url:"$H/m/sales-monthly-aggregation-data.html",Table:"sales-monthly-aggregation-demo-0703",form_module:"sales-monthly-aggregation-form",router:1,transaction_table:"sales-demo-0703"},
        "sales-monthly-aggregation-form":   {url:"$H/m/sales-monthly-aggregation-form.html",Table:"sales-monthly-aggregation-demo-0703"},
        "item-monthly-aggregation-data":    {url:"$H/m/item-monthly-aggregation-data.html",Table:"item-monthly-aggregation-demo-0703",form_module:"item-monthly-aggregation-form",router:1,transaction_table:"sales-demo-0703"},
        "item-monthly-aggregation-form":    {url:"$H/m/item-monthly-aggregation-form.html",Table:"item-monthly-aggregation-demo-0703"},       
        "region-monthly-aggregation-data":  {url:"$H/m/region-monthly-aggregation-data.html",Table:"region-monthly-aggregation-demo-0703",form_module:"region-monthly-aggregation-form",router:1,transaction_table:"sales-demo-0703"},
        "region-monthly-aggregation-form":  {url:"$H/m/region-monthly-aggregation-form.html",Table:"region-monthly-aggregation-demo-0703"},
        "rep-monthly-aggregation-data":     {url:"$H/m/rep-monthly-aggregation-data.html",Table:"rep-monthly-aggregation-demo-0703",form_module:"rep-monthly-aggregation-form",router:1,transaction_table:"sales-demo-0703"},
        "rep-monthly-aggregation-form":     {url:"$H/m/rep-monthly-aggregation-form.html",Table:"rep-monthly-aggregation-demo-0703"},

        //chart
        "sales-monthly-chart":      {url:"$H/m/sales-monthly-chart.html",Table:"sales-monthly-aggregation-demo-0703",router:1},
        "item-monthly-chart":       {url:"$H/m/item-monthly-chart.html",Table:"item-monthly-aggregation-demo-0703",router:1},
        "region-monthly-chart":     {url:"$H/m/region-monthly-chart.html",Table:"region-monthly-aggregation-demo-0703",router:1},
        "rep-monthly-chart":        {url:"$H/m/rep-monthly-chart.html",Table:"rep-monthly-aggregation-demo-0703",router:1},
        
        //setup
        "item-data":  	            {url:"$H/m/item-data.html",Table:"item-demo-0703",form_module:"item-form",router:1},
        "item-form":  	            {url:"$H/m/item-form.html",Table:"item-demo-0703"},
        "rep-data":  	            {url:"$H/m/rep-data.html",Table:"rep-demo-0703",form_module:"rep-form",router:1},
        "rep-form":  	            {url:"$H/m/rep-form.html",Table:"rep-demo-0703"},
        "region-data":  	        {url:"$H/m/region-data.html",Table:"region-demo-0703",form_module:"region-form",router:1},
        "region-form":  	        {url:"$H/m/region-form.html",Table:"region-demo-0703"},

        "dashboard":  	    {url:"$H/d/dashboard.html",router:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
