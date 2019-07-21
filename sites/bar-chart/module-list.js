(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "bar-data":   {url:"$H/m2/bar-data.html",Table:"bar",form_module:"bar-form",router:1},
        "bar-form":   {url:"$H/m2/bar-form.html",Table:"bar"},
        "bar-chart":  {url:"$H/m2/bar-chart.html",Table:"bar"},
        "dashboard":  	    {url:"$H/m1/dashboard.html",router:1},
        "workflow":         {url:"$H/m1/workflow.html",router:1},
        "module-editor":    {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
