(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "inspection-data":  	    {url:"$H/m/inspection-data.html",Table:"inspection-demo-0703",form_module:"inspection-form",router:1},
        "inspection-form":  	    {url:"$H/m/inspection-form.html",Table:"inspection-demo-0703"},
        "inspection-item-data":  	{url:"$H/m/inspection-item-data.html",Table:"inspection-item-demo-0703",form_module:"inspection-item-form",router:1},
        "inspection-item-form":  	{url:"$H/m/inspection-item-form.html",Table:"inspection-item-demo-0703"},
        "inspection-site-data":  	{url:"$H/m/inspection-site-data.html",Table:"inspection-site-demo-0703",form_module:"inspection-site-form",router:1},
        "inspection-site-form":  	{url:"$H/m/inspection-site-form.html",Table:"inspection-site-demo-0703"},

        "dashboard":  	    {url:"$H/d/dashboard.html",router:1},
        "module-editor":    {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
