(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "pie-data":   {url:"$H/m2/pie-data.html",Table:"pie",form_module:"pie-form",router:1},
        "pie-form":   {url:"$H/m2/pie-form.html",Table:"pie"},
        "pie-chart":  {url:"$H/m2/pie-chart.html",Table:"pie"},
        "pie-chart-3d":  {url:"$H/m2/pie-chart-3d.html",Table:"pie"},
        "pie-chart-donut":  {url:"$H/m2/pie-chart-donut.html",Table:"pie"},
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
