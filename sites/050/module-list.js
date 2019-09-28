(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "m1":   {url:"$H/m/dashboard.html",router:1},
        "m2":   {url:"$H/m/inspection-data.html",Table:"inspection-demo-0703",form_module:"m3",router:1},
        "m3":   {url:"$H/m/inspection-form.html",Table:"inspection-demo-0703",Site:"inspection-site-demo-0703",Item:"inspection-item-demo-0703"},
        "m4":  	{url:"$H/m/inspection-item-data.html",Table:"inspection-item-demo-0703",form_module:"m5",router:1},
        "m5":  	{url:"$H/m/inspection-item-form.html",Table:"inspection-item-demo-0703"},
        "m6":  	{url:"$H/m/inspection-site-data.html",Table:"inspection-site-demo-0703",form_module:"m7",router:1},
        "m7":  	{url:"$H/m/inspection-site-form.html",Table:"inspection-site-demo-0703"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
