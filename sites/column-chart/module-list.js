(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "column-data":   {url:"$H/m2/column-data.html",Table:"column",form_module:"column-form",router:1},
        "column-form":   {url:"$H/m2/column-form.html",Table:"column"},
        "column-chart":  {url:"$H/m2/column-chart.html",Table:"column"},
        "column-chart-group":  {url:"$H/m2/column-chart-group.html",Table:"column"},
        "column-chart-stack":  {url:"$H/m2/column-chart-stack.html",Table:"column"},
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
