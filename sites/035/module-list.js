(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "bar-data":   {url:"$H/m/bar-data.html",Table:"bar",form_module:"bar-form",router:1},
        "bar-form":   {url:"$H/m/bar-form.html",Table:"bar"},
        "m1":         {url:"$H/m/bar-chart.html",Table:"bar"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
