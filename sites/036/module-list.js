(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "column-data":  {url:"$H/m/column-data.html",Table:"column",form_module:"column-form",router:1},
        "column-form":  {url:"$H/m/column-form.html",Table:"column"},
        "m1":           {url:"$H/m/column-chart.html",Table:"column"},
        "m2":           {url:"$H/m/column-chart-group.html",Table:"column"},
        "m3":           {url:"$H/m/column-chart-stack.html",Table:"column"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
