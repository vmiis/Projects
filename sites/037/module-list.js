(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "pie-data": {url:"$H/m/pie-data.html",Table:"pie",form_module:"pie-form",router:1},
        "pie-form": {url:"$H/m/pie-form.html",Table:"pie"},
        "m1":       {url:"$H/m/pie-chart.html",Table:"pie"},
        "m2":       {url:"$H/m/pie-chart-3d.html",Table:"pie"},
        "m3":       {url:"$H/m/pie-chart-donut.html",Table:"pie"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
